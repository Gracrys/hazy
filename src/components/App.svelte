<script>
// import router, { curRoute } from '../router/router.js';
 //import RouterLink from '../router/RouterLink.svelte';
// import { Router, Link, Route } from "svelte-routing";
import { onMount } from 'svelte';
import Home from './views/Home.svelte'
import About from './views/About.svelte'
import Web from './views/Web.svelte'
import Music from './views/Music.svelte'
import Design from './views/Design.svelte'
import Writings from './views/Writings.svelte'
import Glitch from './views/Glitch.svelte'
import logo from'~/../assets/feather.png'
import arrow from '~/../assets/icons/arrow.svg'
import menu from '~/../assets/icons/menu.svg'
import down from '~/../assets/icons/down.svg'

const router = {
  '/': Home,
  '#web': Web,
  '#home' : Home,
  '#about' : About,
  '#music' : Music,
  '#writings' : Writings,
  '#glitch' : Glitch,
  '#design' : Design,
}



let hash

$: {
    window.addEventListener("hashchange", () => hash = location.hash , false);
    hash = location.hash
}

const m = {x : 0, y : 0}
onMount(() => {
  
 })


function handleMousemove(event) {
		m.x = -(event.clientX /  15);
		m.y = -(event.clientY / 15);
	}
</script>

<style lang=scss>
  nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
    border: none;
  }
  section{
    @media screen and (max-width: 600px) {
      margin-top: 10vh;
    }
  }
  .logo{
    display:block;
    width: 120px;
    position: absolute;
    visibility: hidden;
  }
  .logo > img{
    width: 100%;
  }
.hamburger{
  display:flex;
  flex-direction: column;
  float: right;
    position: absolute;
    top: 1.6rem;
    right: 0;
  > img{
    width: 3rem;
    margin: auto;
  }
  nav{
    align-items: flex-start;
    margin-top: 1rem;
  }
  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0;
    overflow: hidden;
    min-height: 0;
    max-height: 0;
    transition: all 0.6s;
  }
  &:hover{
    nav > ul{
      height: auto;
      max-height: 100vh;
    }
  }
  .nested:hover ul{
      transition: all 1s;
      height: auto;
      max-height: 100vh;
    }
}
  .nested{
    img{
      width: 1rem;
    }
  }

  .back{
    margin: auto;
    display: flex;
    width: 20vw;
    flex-direction: column-reverse;
    align-items: center;
    
  }

  @media (min-width: 900px){
    section{
        max-width: 80%;
        margin: auto;
      }
  }
  @keyframes haze{
    0% {
        filter: hue-rotate(45deg);
    }
    50% {
        filter: hue-rotate(-45deg);
    }
    100% {
        filter: hue-rotate(45deg);
    }
  }
  .moving_bg{
    animation: 4s haze infinite;
  }
</style>

<main id="pageContent" on:mousemove={handleMousemove}>
 <a href="#home" class="logo"><img src={logo} alt="logo"></a>
  <figure  class="moving_bg" style={`top:${m.y}px;left:${m.x}px;`}/>
    <section>
      <nav class="main_nav">
        <a href="http://codepen.io/gracrys">codepen</a>
        <a href="http://twitter.com/gracrys">twitter</a>
        <a href="http://github.com/gracrys">github</a>
        <!-- <a href="https://t.me/HazyG">telegram</a> -->
      </nav>
     
      <svelte:component this={router[hash] ? router[hash] : Home} />
    </section>
 <div class="hamburger">
        <img src={menu} alt="hamburger" title="main menu"> 
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#web">Programming</a></li>
          <li><a href="#writings">Writings</a></li>
          <li class="nested">Designs <img src={down} alt="nested menu" > 
            <ul>
              <li><a href="#design">UI / UX</a></li>
              <li><a href="#glitch">Glitch</a></li>
            </ul>
          </li>
        </nav>
      </div> 
    {#if hash && hash != "#home"}
        <a class="back mt-4" href="/"><img src={arrow} alt="arrow" title="go back"></a>
    {/if}
</main>
