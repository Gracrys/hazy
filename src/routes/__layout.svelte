

<script>
  import Header from '$lib/header.svelte'
  import '../sass/app.sass'
  import { onMount } from 'svelte';
  import { page } from '$app/stores';


let path 
$: {
   path = !!$page.url.pathname.match(/(?<=\/)\w+/gi) 
   console.log(path)
  }

  const m = {x : 0, y : 0}
onMount(() => {
  
 })


function handleMousemove(event) {
    m.x = -(event.clientX /  15);
    m.y = -(event.clientY / 15);
  }
</script>

  <main id="pageContent" on:mousemove={handleMousemove}>
    <Header /> 
     <!-- <a href="#home" class="logo"><img src={logo} alt="logo"></a> -->
      <figure  class="moving_bg" style={`top:${m.y}px;left:${m.x}px;`}/>
   
   

    <section>
  <slot />
  </section>
   {#if path }
        <a class="back mt-4" href="/"><img src="/icons/arrow.svg" alt="arrow" title="go back"></a>
    {/if}
</main>

<style lang="scss">

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