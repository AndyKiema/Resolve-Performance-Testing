import http from 'k6/http';

export const options={
    stages:[
        {
          duration: '40s',
          target: 50
        },
        {
          duration: '1m',
          target: 1000
        },
        {
          duration: '20s',
          target: 0
        }
    ]
}
export default function(){
    http.get('https://resolve.vote/');
}