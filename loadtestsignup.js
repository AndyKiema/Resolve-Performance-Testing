import http from 'k6/http';

export const options={
    stages:[
        {
            duration:'10s',
            target: 10
        },
        {
            duration:'2m',
            target:10
        },
        {
            duration:'10s',
            target:0
        }

    ]
}

export default function(){
    http.get('https://resolve.vote/signup');
}