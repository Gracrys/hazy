<script>
// import router, { curRoute } from '../router/router.js';
// import RouterLink from '../router/RouterLink.svelte';
import { Router, Link, Route } from "svelte-routing";
import { onMount } from 'svelte';
import Home from './views/Home.svelte'
import Web from './views/Web.svelte'

const m = {x : 0, y : 0}

onMount(() => {

}
)

function handleMousemove(event) {
		m.x = -(event.clientX /  15);
		m.y = -(event.clientY / 15);
	}
</script>

<style>
  nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
    border: none;
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
  <figure  class="moving_bg" style={`top:${m.y}px;left:${m.x}px;`}/>
  <Router url="{url}">
    <section>
      <nav>
        <a href="http://codepen.io/gracrys">codepen</a>
        <a href="http://twitter.com/gracrys">twitter</a>
        <a href="http://github.com/gracrys">github</a>
        <!-- <a href="https://t.me/HazyG">telegram</a> -->
      </nav>
      <Route path="*"><Home /></Route>
      <Route path="/"><Home /></Route>
      <Route path="/web"><Web /></Route>
    </section>
  </Router>
</main>
