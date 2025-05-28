import http from 'k6/http';

export const options={
    stages:[
        {
            duration:'10s',
            target:20
        },
        {
            duration:'30s',
            target:20
        },
        {
            duration:'20s',
            target:0
        }

    ]
}

export default function(){
    http.get('https://resolve.vote/votes/89e11929-a86e-47e7-908c-5a13c357d658');
}