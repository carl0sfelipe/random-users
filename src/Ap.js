import axios from "axios";
import { useEffect, useState } from "react";
import styled from 'styled-components'

const Form = styled.form`
display: grid;
grid-template-columns: 1fr;
justify-content: center;
align-items: center;
padding:30px;
margin:10px;
background: red;
h1{justify-self:center;}
select{
    justify-self: center;
    width:fit-content;}
`




const Msg = styled.p`
display: flex;
justify-content: flex-end;
margin-right: 20px;
`

const Msg2 = styled.p`
display: flex;
justify-content: flex-start;
margin-left: 20px;
`

const Ui = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: space-between;
gap:5px;
img{
  border-radius: 25px;
}
`
const Card = styled.div`
display: flex;
justify-content: flex-start;
gap:4px;
padding: 10px;





`
const Male = styled.div`
display: flex;
height: fit-content;
background: #8ea0ff;
border-radius: 8px;


`
const Female = styled.div`
display: flex;

height: fit-content;
background: #ff8efa;
border-radius: 8px;


`


function Ap() {
  const [users, setUsers] = useState([])
  const [card, setCard] = useState()
  const [quanti,setQuanti] = useState(4)

  useEffect(() => {
    axios.get(`https://www.randomuser.me/api?results=${quanti}`).then((res) => {
      console.log(res.data.results);
      setUsers(res.data.results);

    })
  }, [quanti])

  useEffect(() => {

 setCard(users.map((el)=>{
    if(el.gender==='male'){
        return(
        <Male key={el.login.md5}>
            <img src={el.picture.thumbnail} />
            <span >{el.name.first}&nbsp;</span>
            <span >{el.name.last}</span>

        </Male>)} else{return(
            <Female key={el.login.md5}>
            <img src={el.picture.thumbnail} />
            <span >{el.name.first}&nbsp;</span>
            <span >{el.name.last}</span>

        </Female>)
        }
    }))
}, [users])

function carregaUsuarios(event){
    event.preventDefault();

}

  return (<>
   <Form onSubmit={carregaUsuarios} >
   <h1>How much users do you want?</h1>

        <select type='number'  title="no maximo 999 usuarios" value={quanti} onChange={(event) => setQuanti(event.target.value)} placeholder={'Quantos voce quer ?'} >
<option>
    4
</option>
<option>
    10
</option>
<option>
    20
</option>
<option>
    100
</option>
        </select>
        </Form>
 <Ui>
{card}      

    </Ui>
    </>
  );
}

export default Ap;
