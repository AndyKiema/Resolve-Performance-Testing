import http from 'k6/http';
export const options={
    stages:[
        {
         target:20,
         duration:"30s"
        },
        {
         target:60,
         duration:"1m"
        },
        {
         target:100,
         duration:"1m"
        },
        {
         target:300,
         duration:"1m"
        },
        {
         target:350,
         duration:"1m"
        },
        {
         target:450,
         duration:"1m"
        },
        {
         target:500,
         duration:"1m"
        },
        {
         target:550,
         duration:"1m"
        }

    ]
}
export default function(){
    http.get("https://resolve.vote/");
}