import React, { HTMLAttributes, useState } from 'react';
import axios from 'axios';

export const ApiContext = React.createContext<any>({});

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ApiProvider: React.FC<Props> = (props: { children: React.ReactNode}) => {
    const { children } = props;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const apiURL = 'http://localhost:4000/';

    const fetchAPI = (method: string, url: string, body: any) => {
        axios({
            url: apiURL + url,
            method: method,
            data: body,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(resp => setResponse(resp.data))
        .catch(err => setResponse(err))
    }

    return (
        <ApiContext.Provider
          value={{
            fetchAPI,
            data: response,
            error,
          }}
        >
          {children}
        </ApiContext.Provider>
      );
}

export default ApiProvider;