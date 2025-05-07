import http from 'k6/http'; //This imports the HTTP module from K6, allowing you to make HTTP requests in the script

export const options={ //This object defines the stages of the load test
    stages:[ //stages: An array of objects that defines the load pattern over time.
        {
            duration:'10s', //For the first 10 seconds, 50 VUs will be active.
            target: 50
        },
        {
            duration: '20s', //For the next 20 seconds, 50 VUs will continue to be active
            target: 50
        },
        {
            duration: '10s',  //For the next 10 seconds, no VUs be active
            target: 0
        }
    ]
}

export default function(){ // is the main test function that will be executed by each virtual user
    http.get('https://resolve.vote/');
}