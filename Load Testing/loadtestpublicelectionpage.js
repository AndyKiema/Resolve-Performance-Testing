import http from 'k6/http';

export const options={
    stages:[
        {
            duration:'10s',
            target:20
        },
        {
            duration:'4m',
            target:20
        },
        {
            duration:'20s',
            target:0
        }
    ]
}

export default function(){
    http.get('https://resolve.vote/elections/create?mode=public');
}