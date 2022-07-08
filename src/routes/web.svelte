<script>
  

  const projects = [
   { title: "Saphirus",
    description: "Platform for Indie Startup Company focused on web development services, ghost writing for multimedia, and games, coded with materialize css and svelte sapper, my job was mostly on front end development + design.",
    img: '/designs/saph.jpg'
  },
  { title: "Abenuz",
    description: "New branch from big company of accountants, finances and other stuff, looking for an opportunity to swim in the crypto currency field.",
    img: '/designs/Abenuz.jpg'
  },
  { title: "Mountains",
    description: "Single test for showing off some effects like glass effect with css, transitions, simple animations and simple javascript effects, everything in vanilla.",
    img: '/designs/mountains.JPG'
  },
   { title: "TO DO ",
    description: "To do web app made with svelte.js, as  a way of learning the framework, fell in love with it, connected it with some parcel and saved the info to local storage, the style is made with materialize.css, Ended using this project as a template for TS + SVELTE + SASS + MATERIALIZE in github",
    img: '/projects/todo.JPG'
  },
  {
    title: "Sad Georgie",
    description: "Web app made in React, a WIP for a social web that encourages the people with deppression or anxiety to talk about it, this was a project made for a psychologist to help people with problems, the design is kind of chidish, depicting a child with big dark clothes in the logo, the idea of this was to use some doodles for the background, buttons, menu, etc. the backend is in node js, storing the data in some documents  lol.",
    img: '/projects/sadgeorgie.jpg' 
  },
    {
     title: "RRHH Manager", 
    description: "I started on this project because of the university, i decided to tackle backend at fully just because of a desire in learning, i will stick to front end lol, this project is made with vue 2, using vuex, i didnt use vue router for this but is made to look like a spa, i tell the application  which components to render and so all the important info is shown in windows, that is how i called them, while some other like user info is shown in a modal. \n The backend is made in express and the database in mysql server, mysql was a must, this projects works managing some employees, projects and task info, tasks are inside projects and asigned to employees... cool enough.",
    img: '/projects/rrhh.png'
    },
    {
     title: "Gungi Board ", 
    description: "Chess-like board game but wth a higher level of complexity and movement on 3-axis, working on it as personal project, most of the repos i have found are incomplete, this project is made in react. Work still in progress",
    img: '/assets/projects/gungi.png'
    },
    {
        title: "circles landing page",
        description: "This one was \"tryout\" on svg, with a preloader and some circular menu, also some experiment in design and a challenge to make an interface using circles",
        img: '/projects/circles.png' 
    }
  ]
</script>



<div class="container mt-4">
  {#each projects as project }
    <article class="card pt-2 mb-5">
      <h5>{project.title}</h5>
      <figure>
        <img src={project.img} alt={project.img}>
        <figcaption class=" px-4"><p class="pt-5">{project.description}</p></figcaption>
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

<style lang=scss>
div{
    max-height: 70vh;
    overflow: auto;
}

 article{
  margin: auto;
  display: flex;
  background-color: #343434dc ;
  flex-direction: column;
  align-items: center;
 } 
  article img{
    width: 100%;
    transition: all 0.6s;
  }
  article figure{
    position: relative;
  }
  article figcaption{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    background-color: #34343477;
    height: 0;
    max-height: 100vh;
    transition: all 1s;
    padding-top: 0px;
    overflow: hidden;
  }
  article h5{
    transition: all 0.4s ease-out;
    position: relative;
    top: 0;
    z-index: 2;
  }
  article:hover h5{
    transition: all 1s;
    position: relative;
    top: 4rem;
  }
  article:hover img{
    filter: blur(3px);

  }
  article:hover figcaption{
    height: 100%;
  }
 </style>
