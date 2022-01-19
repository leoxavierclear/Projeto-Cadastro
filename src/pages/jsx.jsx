export default function jsx() {
    const title = <h1>JSX é um conceito fundamental</h1>


    function subtitle() {
        return <h2>{"Muito legal".toUpperCase()}</h2>
    }


    return(
        <div>
            {title}
            {subtitle()}
          <p>
            {JSON.stringify({nome:'João', idade: 30})}
          </p>
           
        </div>
    )
}