import http from 'k6/http';
export const options={
    stages:[
        {
         target:250,
         duration:"1m"
        },
        {
         target:1000,
         duration:"30s"
        },
        {
         target:0,
         duration:"20s"
        }
    ]
}
export default function(){
    http.get("https://resolve.vote/elections/create?mode=public");
}