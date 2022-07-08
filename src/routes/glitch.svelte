<script>

import { fade } from 'svelte/transition';
    
let current = {};
const tictoc = (x) => {

current = {...x, highlight: true} 
}
$: console.log(current)

const projects = [  {
    title: "burning monk",
    img: '/designs/glitch/monk.jpg',
    highlight: false 
  },
   {
    title: "girl",
    img: '/designs/glitch/girl.jpg',
    highlight: false 
  },
{
    title: "city",
    img: '/designs/glitch/landscape city.jpg',
    highlight: false 
  },
  {
    title: "Waterfalls - salto angel",
    img: '/designs/glitch/waterfall.jpg',
    highlight: false 
  },
   {
    title: "Empty Soul",
    img: '/designs/glitch/soul.png',
    highlight: false 
  },
  {
    title: "The Maker",
    img: '/designs/glitch/maker.jpg',
    highlight: false 
  },
{
    title: "searing skies",
    img: '/designs/glitch/searin2.jpg',
    highlight: false 
  },
    {
    title: "spider lamp",
    img: '/designs/glitch/spider.jpg',
    highlight: false 
  },
   {
    title: "fuji",
    img: '/designs/glitch/fuji.jpg',
    highlight: false 
  },
  {
    title: "kid",
    img: '/designs/glitch/glitckid.jpg',
    highlight: false 
  },
{
    title: "snowy mountain",
    img: '/designs/glitch/mountain.png',
    highlight: false 
  },

  ]



  function scale(node, {
	delay ,
    duration = 500,
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
section{
  background-color:#343434dc ;
  position: relative;
  h4{
      text-align: center;
  }
}
.grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

}
article{
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
 } 
figure{
    position: relative;

}
figure figcaption{
    visibility: hidden;
    position: absolute;
    top:0;
}
figure:not(.highlight) img{
    width: 100%;
    height: 100%;
    object-position: center center;
    object-fit: cover;
    max-height: 40vh;
    transition: all 0.6s;
    &:hover{
        opacity: 0.4;
        + figcaption{
            visibility: visible;
            pointer-events: none;
        }
    }
}
.lightroom{
    display: none;
    position: absolute;
    background: transparent;
    border: none;
    top: 0;
    left: 0;
    >img{
        transition: transform 0.6s ;
        height: 80%;
        transform: scale(0)
    }
    display: block;
    height: 0;
}


.highlight{
    display: block;
    z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  width: 60vh;
  left: 0;
  display: flex; 
  justify-content: center;
  align-items: center;
    > img{
        transform: scale(1);
        background: transparent;
        object-fit: contain;
    }

}

 </style>


<div class=" mt-4">
    <section class="">
    <h4 class="pt-4">Image edition</h4>

    <div class="grid py-4">
      {#each projects as project }
      <figure >
        <img loading="lazy" on:click|preventDefault={() => current = {...project, highlight: true}}  src={project.img}  alt={project.img}>
        <figcaption   class=" px-4">
            <h5>{project.title}</h5>
        </figcaption>
      </figure>
  {/each}
  </div>
 </section>
<!--   <article class="card pt-2 mb-5">
        <p> For more proyects, checkout my 
            <a href="http://codepen.io/gracrys">codepen</a>
            <br>
            Soon there will be more!
        </p> 
    </article> -->
<dialog  on:click|stopPropagation|preventDefault={()=>false} class:highlight={current.highlight} class="lightroom">
    <img  on:click={() => current.highlight = false} src={current.img} alt="">
  </dialog>
</div>