<script>
import login from '~/../assets/designs/log in.png'
import mountain from '~/../assets/designs/mountains.jpg'
import { fade } from 'svelte/transition';
    

const projects = [  {
    title: "Login screen",
    summary: "Testing with a dark palette and inspired by some kind of red sun...",
    description: "Kind of conceptual design, based in some post apocalyptic images i found while surfing the web, i see the purpose of the app to show a relaxed ambient, while the colors are calm and with low saturation, also its minimalist design and layout keep you focused on what is important.",
    img: login,
    detail: false 
  },
    {
    title: "Mountains",
    summary: "Relaxing ui with snowy mountain concept, also, writing made by me...",
    description: "Show off for codepen, the concept was to give a background to the writing, the card where the text is showing is made with some blur property, which is still experimental. <a href=\"https://codepen.io/gracrys/full/rbPdMe\"> link to pen </a>",
    img: mountain,
    detail: false 
  },
  ]



  function spin(node, {
	delay ,
    duration = 500,
    absolute
}) {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		css: (t,u) => `transform: rotate3d(0,1,0,${u * 90}deg);  display: ${absolute ? "absolute" : "block"}`
	};
}
</script>

<style lang=scss>
div{
    max-height: 70vh;
    overflow: auto;
}

 article{
  margin: auto;
  display: flex;
  background-color: #121212 ;
  flex-direction: column;
  align-items: center;
 } 
  article img{
    width: 100%;
    transition: all 0.6s;
    left: 0; 
    top: 0
  }
  article figure{
    position: relative;
    width: 100%;
  }
  article figcaption{
     top:0; 
    width: 100%;
    display: block;
    transition: all 1s;
    padding-top: 0px;
    color: #ffffff99;
    + a {
        text-align: center;
        display: block;
    }
  }
  article h5{
    transition: all 0.4s ease-out;
    position: relative;
    top: 0;
    z-index: 2;
  }
  article > i{
    color: #ffffff99;
    cursor: pointer
  }
  
 </style>


<div class="container mt-4">
  {#each projects as project }
    <article class="card pt-2 mb-5">
      <h5>{project.title}</h5>
        {#if !project.detail}
            <i out:fade={{delay:100}} on:click={()=>project.detail = true} title="click for detailed info">{project.summary}</i>
        {/if}
      <figure class="px-5">

        {#if !project.detail}
            <img out:spin src={project.img} in:fade alt={project.img}>
        {:else}
            <figcaption in:fade="{{ delay: 500}}"  class=" px-4"><p class="">{project.description}</p></figcaption>
            <a href="#" on:click|preventDefault={()=>project.detail = false}> hide</a>
        {/if}
      </figure>
    </article>
  {/each}
    <article class="card pt-2 mb-5">
        <p> For more proyects, checkout my 
            <a href="http://codepen.io/gracrys">codepen</a>
            <br>
            Soon there will be more!
        </p> 
    </article>

</div>