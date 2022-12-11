import { useState } from "react"
import { Button } from "../../components/botao";
import { Card } from "../../components/card";
import { Input } from "../../components/input/intex";
import pessoaService from "../../services/pessoa";
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
        <Card>
            <div>
                <Input
                    placeholder="Primeiro nome"
                    type="text"
                    onChange={handleNome} />
                <Button onClick={getInfoByName}>obter</Button>
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
            </Card>
        </>
    )
}