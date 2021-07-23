let count=0;

const onbuttonclick= () => {
    document.getElementById("semi").play();
    count+=1;
}
const onbuttonclick2= ()=>{
    document.getElementById("semi").pause();
    document.getElementById("semi").currentTime = 0;
}
