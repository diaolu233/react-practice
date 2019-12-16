import styled from "styled-components";
const ellipsis = (Comp)=>{

    //    console.log(props)
   
    const ellipsisComp = styled(Comp)`
        overflow: hidden;
        text-overflow: ellipsis;
        width: ${props => props.width || 'auto'}; 
       
        white-space:${props => props.lineClamp > 1 ? '': "nowrap"};
        display: ${props => props.lineClamp > 1 ? " -webkit-box" : ''}; 
        -webkit-line-clamp:${props => props.lineClamp > 1 ? props.lineClamp : ''};
        -webkit-box-orient:${props => props.lineClamp > 1 ? "vertical" : ''}; 
    `
    return ellipsisComp 
}
export default ellipsis