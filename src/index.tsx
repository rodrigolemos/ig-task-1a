import { render } from 'react-dom'
import { MoviesContextProvider } from './hooks/movies/index'
import { App } from './App'

render(
  <MoviesContextProvider>
    <App />
  </MoviesContextProvider>,
document.getElementById('root'))
