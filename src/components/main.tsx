import { useState } from "react"
import pessoaService from "../services/pessoa";
export function Main() {

    const [firstName, setFirstName] = useState('frederico');
    const [res, setRes] = useState([]);
    const [name, setName] = useState('');

    const getInfoByName = async () => {
        const response: any = await pessoaService.list(firstName)
        if (!response.error) {
            setRes(response[0].res);
            setName(response[0].nome);
        }
    }

    const handleNome = (event: any) => {
        setFirstName(event.target.value);
    };

    return (
        <>
            <div>
                <input
                    placeholder="Primeiro nome"
                    type="text"
                    onChange={handleNome} />
                <button onClick={getInfoByName}>obter</button>
            </div>
            {res.length > 0 &&
                <div>
                    <span>
                        Nome: {name}
                    </span>

                    {res.map(function (res: any, i) {
                        return (
                            <div key={i}>
                                <span >{res.periodo}: {res.frequencia}</span>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}