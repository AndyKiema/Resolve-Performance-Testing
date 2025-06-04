import http from 'k6/http';

export const options={
    stages:[
        {
            duration:"1m",
            target:250
        },
        {
            duration:"30s",
            target:1000
        },
        {
            duration:"20s",
            target:0
        }
    ]
}

export default function(){
    http.get('https://resolve.vote/signup');
}