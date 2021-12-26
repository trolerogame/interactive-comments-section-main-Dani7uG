import styled,{createGlobalStyle} from 'styled-components'


export const StyleGlobal = createGlobalStyle`
    html {
        max-width: 100ch;
        padding: 1.5em 1em;
        margin: auto;
        line-height: 1.75;
        background:hsl(228, 33%, 97%);
        font-family: 'Lato', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
        overflow: hidden;
        @media (max-width: 762px){
            overflow: auto;
        }
    }
`

export const ContainComments = styled.div`
    overflow: auto;
    height: 900px;
    @media (max-width: 762px){
        overflow: hidden;
        height: auto;
    }
`

export const CommentContain = styled.div`
    position: relative;
    margin-bottom:15px;
    padding:20px 40px 20px 20px;
    background: #fff;
    border-radius:5px;
    .containComment{
        display:flex;
    }
    .comment{
        margin:0 30px;
        width: 100%;
        display:flex;
        flex-direction: column;
        align-items:start;
    }
    .person{
        display:flex;
        align-items: center;
        p,img,b{
            margin:0 10px;
        }
    }
    .person img{
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    @media (max-width: 762px){
        .containComment{
            flex-direction: column-reverse;
        }
        padding:10px;
        .comment{
            margin:0;
        }
        .person img{
            width:40px;
            height: 40px;
        }
    }
`

export const CountLikes = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:hsl(228, 33%, 97%);
    height: 120px;
    width: 28px;
    border-radius: 30px;
    padding:0 5px;
    span{
        font-size:18px;
        color:hsl(238, 40%, 52%);
        font-weight: bold;
    }
    span,img{
        padding:5px;
    }
    img{
        transition:filter .1s linear;
        cursor:pointer;
    }
    img:hover{
        filter:brightness(50%)
    }
    @media (max-width: 762px){
        flex-direction: row;
        height:38px;
        width: 90px;
        border-radius:9px;
        span,img{
            padding:5px 10px;
        }
    }
`

export const ButtonNotBd = styled.div`
    display:flex;
    align-items: center;
    position: absolute;
    right: 20px;
    top: 20px;
    img{
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
    .delete{
        color:${props => props.two === '2' ? 'hsl(358, 79%, 66%)' : props.color};
        margin-right:10px;
    }
    button{
        border:none;
        background:none;
        font-size:18px;
        font-weight:bold;
        color:${props => props.color};
        margin-left:2px;
        cursor: pointer;
    }
    @media (max-width: 762px){
        bottom:20px;
        top:0;
        align-items: end;
    }
`

export const Replices = styled.div`
    border-left: 2px solid hsl(239, 57%, 85%);
    padding-left: 40px;
    margin-left: 30px;
    @media (max-width: 762px){
        padding-left:15px;
        margin-left: 0px;
    }
`

export const ButtonBd = styled.button`
    font-size:20px;
    height:50px;
    width: 120px;
    padding:0 20px;
    border:none;
    outline:none;
    background:hsl(238, 40%, 52%);
    color:#fff;
    border-radius:5px;
    cursor: pointer;
`

export const Form = styled.form`
    display:flex;
    background:#fff;
    padding:15px;
    border-radius:10px;
    textarea{
        width:100%;
        height:100px;
        border-radius:10px;
        outline:none;
        border:1px solid hsl(239, 57%, 85%);
        padding:10px 20px;
        resize: none;
        margin:0 20px;
        
    }
    img{
        width:40px;
        height:40px;
        object-fit: cover; 
    }
    @media (max-width: 762px){
        flex-wrap: wrap;
        align-items:center;
        justify-content: space-between;
        padding:20px;
        textarea{
            order: -1;
            margin:0;
            margin-bottom:20px;
        }
    }
`

export const UpdateComment = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top:20px;
    textarea{
        height:100px;
        border-radius:10px;
        outline:none;
        border:1px solid hsl(239, 57%, 85%);
        padding:10px 20px;
        resize: none;
    }
    button{
        margin-top:10px;
    }
`