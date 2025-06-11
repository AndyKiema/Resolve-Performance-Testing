import http from 'k6/http';
export const options={
    stages:[
        {
         target:200,
         duration:"30s"
        },
        {
         target:500,
         duration:"60s"
        },
        {
         target:1000,
         duration:"60s"
        },
        {
         target:1500,
         duration:"60s"
        },
        {
         target:2000,
         duration:"60s"
        },
        {
         target:2500,
         duration:"60s"
        },
        {
         target:0,
         duration:"60s"
        }
    ]
}
export default function(){
    http.get("https://resolve.vote/signup");
}