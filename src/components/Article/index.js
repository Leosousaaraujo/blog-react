import Post from '../Post';

function Article(){
    return(
        <section className="container">
            <h1>Artigo</h1>
            <div className="mt-5 container-posts">
            <Post subtitulo="Tecnologia" titulo="O guia definitivo do blog">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
            tincidunt mauris urna, non elementum magna porttitor sit amet. 
            Curabitur at convallis eros. Nulla pellentesque sem ac ipsum auctor 
            vulputate. Donec ex ipsum, tempor quis felis non, sollicitudin 
            tincidunt dui. Suspendisse potenti. Morbi pellentesque eros quis gravida porttitor. 
            </Post>
            <Post subtitulo="Fotografia" titulo="Melhores cameras para 2021">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
            tincidunt mauris urna, non elementum magna porttitor sit amet. 
            Curabitur at convallis eros. Nulla pellentesque sem ac ipsum auctor 
            vulputate. Donec ex ipsum, tempor quis felis non, sollicitudin 
            tincidunt dui. Suspendisse potenti. Morbi pellentesque eros quis gravida porttitor.
            </Post>
            <Post subtitulo="Cinema" titulo="Os 10 filmes com maior bilheteria">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
            tincidunt mauris urna, non elementum magna porttitor sit amet. 
            Curabitur at convallis eros. Nulla pellentesque sem ac ipsum auctor 
            vulputate. Donec ex ipsum, tempor quis felis non, sollicitudin 
            tincidunt dui. Suspendisse potenti. Morbi pellentesque eros quis gravida porttitor.
            </Post>
            </div>

        </section>
    );
}

export default Article;