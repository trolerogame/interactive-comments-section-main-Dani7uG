import styled,{createGlobalStyle} from 'styled-components'


export const StyleGlobal = createGlobalStyle`
    html {
        max-width: 100ch;
        padding: 3em 1em;
        margin: auto;
        line-height: 1.75;
        background:hsl(228, 33%, 97%);
    }
`

export const CommentContain = styled.div`
    position: relative;
    display:flex;
    padding:20px 20px;
    background: #fff;
    button{
        position: absolute;
        right: 10px;
        top: 20px;
    }
    .comment{
        margin:0 30px;
    }
`

export const CountLikes = styled.div`
    display:flex;
    flex-direction: column;
    background:hsl(228, 33%, 97%);
    height: 120px;
    border-radius: 30px;
    span{
        cursor: pointer;
        margin:5px 0;
    }
`