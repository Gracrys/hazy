<script>
  import todo from '~/../assets/projects/todo.JPG'
  const projects = [{
    title: "TODO ",
    description: "something",
    img: todo
  }]
</script>

<div class="container mt-4">
  {#each projects as project }
    <article class="card pt-2 ">
      <h5>{project.title}</h5>
      <figure>
        <img src={todo} alt="todo">
        <figcaption>{project.description}</figcaption>
      </figure>
    </article>
  {/each}
</div>

<style lang=sass>
 article{
  margin: auto;
  display: flex;
  background-color: #343434dc ;
  flex-direction: column;
  align-items: center;
 } 
  article img{
    width: 100%;
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
    background-color: #c0c0c077;
    color: black;
    visibility: hidden;
    height: 0;
  }
  article:hover figcaption{
    visibility: visible;
    height: 100%;
  }
 </style>
