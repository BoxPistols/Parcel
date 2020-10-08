// 親要素のターゲット
const app = document.getElementById('app')
// p要素の作成
const p = document.createElement('p')
// p要素にテキストを追加
p.innerText = 'Hello World!'
// 親要素の中にp要素を追加、出現させる
app.appendChild(p)

/*
 * Module
 */
import '../css/main.sass'
import { myFunc } from './main.js'

const today = myFunc(24)
document.querySelector('#app').textContent = today
