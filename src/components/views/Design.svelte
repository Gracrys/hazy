<script>
import login from '~/../assets/designs/log in.png'
import mountain from '~/../assets/designs/mountains.jpg'
import music from '~/../assets/designs/music player.png'
import gadow from '~/../assets/designs/gadow.jpg'
import saph from '~/../assets/designs/saph.jpg'
import wave from '~/../assets/designs/vaporwave.jpg'
import green from '~/../assets/designs/green.png'
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
    description: "Show off for codepen, the concept was to give a background to the writing, the card where the text is showing is made with some blur property, which is still experimental in some browsers",
    img: mountain,
    detail: false 
  },
  {
    title: "Music Player",
    summary: "Using new neomorphism trend with a subtle dark blue palette ",
    description: "Wanted to do something with a monocolor palette and neomorphism, there are a lot of music player designs, even with neomorphism there are a pair, i tried to give it a new grasp, while it maintains a little subtler style, the playing with shadows and inner shadows was tough.",
    img: music,
    detail: false 
  },
	{

	title: "Gadow",
	summary: "Social red for creators, in a dark - blue palette.",
	description: "Proposal for a social red for creators, inspired by some palettes like discord and twitter, and using depth design style, sadly it never got to the development workbench, but i think the wireframe is being used for a similar project.",
	img: gadow,
	detail: false
	
	},
	{
	title: "Saphirus",
	summary: "Social red for games and gamers",
	description: "Application for all kind of gamers to find and play all kind of indie games with a gaining system and others social features, tried to use an approach using many gradients and a blue pattern, trying to focus on what is a saphire",
	img: saph,
	detail: false
	},
	{
	title: "vaporwave",
	summary : "Little design of a vapor wave popup",
	description: "modal interactive made in figma using a color duotone approach and vapor wave style",
	img: wave,
	detail: false
	},
  {
	title: "Green",
	summary: "Neumorphism design on a green palette",
	description: "trying out a green palette and neumorphism for an organic design of a plants blog",
	detail: false,
  img: green
}
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
  background-color:#343434dc ;

  flex-direction: column;
  align-items: center;

  img{
    width: 100%;
    transition: all 0.6s;
    max-height: 70vh;
    left: 0; 
    top: 0;
    max-height: 40vh;
    height: 100%;
    width: auto;
    margin: auto;
    display: block;
    cursor: crosshair;
    object-fit: scale-down;
  }
  figure{
    position: relative;
    width: 100%;
  }
  figcaption{
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
  h5{
    transition: all 0.4s ease-out;
    position: relative;
    top: 0;
    z-index: 2;
    cursor: pointer;
  }
   > i{
    color: #ffffff99;
    cursor: pointer
  }
}
  
 </style>


<div class="container mt-4">
  {#each projects as project }
    <article class="card pt-2 px-5 mb-5">
      <h5 title="click for detailed info" on:click={()=>project.detail = true}>{project.title}</h5>
      
        {#if !project.detail}
           
            <i out:fade={{delay:100}} on:click={()=>project.detail = true} title="click for detailed info">{project.summary}</i>
        {/if}
      <figure class="">

        {#if !project.detail}
          <a href={project.img} target="_blank">
            <img out:spin  src={project.img} in:fade alt={project.img}>
          </a>
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
