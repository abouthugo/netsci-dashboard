import React, { Component } from 'react'
import axios from 'axios'
import * as helper from '../data-helpers'
import * as transformer from '../utils/dataTransformer'

export const DataContext = React.createContext()
const URL = 'http://netsci.montclair.edu/api/'

export class DataProvider extends Component {
  constructor () {
    super()
    this.state = {
      pie: [],
      line: [],
      bar: [],
      radar: [],
    }
  }

  componentDidMount () {
    safeFetch(100, this.updateState);
  }

  updateState = (pie, line, bar, radar) => {
    this.setState({
      pie,
      line,
      bar,
      radar,
    })
  }

  randomPie = () => {
    this.setState({
      pie: helper.pieData(['sass', 'scss', 'css'])
    })
  }

  randomLine = () => {
    this.setState({
      line: helper.lineData(['run', 'jog', 'walk'], 7)
    })
  }

  randomBar = () => {
    this.setState({
      bar: helper.barData(10)
    })
  }

  randomRadar = () => {
    this.setState({
      radar: helper.radarData()
    })
  }

  buildCharts = () => {
    this.setState({
      pie: helper.pieData(['sass', 'scss', 'css']),
      line: helper.lineData(['run', 'jog', 'walk'], 7),
      bar: helper.barData(10),
      radar: helper.radarData()
    })
  }

  render () {
    return (
      <DataContext.Provider
        value={{
          state: this.state,
          randomPie: this.randomPie,
          randomLine: this.randomLine,
          randomBar: this.randomBar,
          randomRadar: this.randomRadar,
          buildCharts: this.buildCharts
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

const yoloFetch = async (sampleSize, updateState) => {
  const metricsPromise = axios.get(`${URL}corpora_metrics/`)
  const articlesPromise = axios.get(`${URL}multi_article/${sampleSize}`)
  const novayaPromise = axios.get(`${URL}multi_novaya/${sampleSize}`)
  const weiboPromise = axios.get(`${URL}multi_weibo/${sampleSize}`)
  const [{data: metrics}, {data: articles}, {data: novaya}, {data: weibo}] = await Promise.all([
    metricsPromise,
    articlesPromise,
    novayaPromise,
    weiboPromise
  ])
  delete metrics["freeweibo_topic_count"]
  const pieData = transformer.metrics_to_pie(metrics)
  const lineData = helper.lineData(['run', 'jog', 'walk'], 7)
  const barData = transformer.metrics_to_bar(metrics);
  const radarData = helper.radarData()
  updateState(pieData, lineData, barData, radarData)
}

const catchError = fn => (...params) =>
  fn(...params).catch(err => console.error('Uh oh!', err))
const safeFetch = catchError(yoloFetch)
