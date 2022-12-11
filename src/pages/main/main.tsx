import { useState } from "react"
import { Button } from "../../components/botao";
import { Card } from "../../components/card";
import { Input } from "../../components/input/intex";
import { Text } from "../../components/text";
import pessoaService from "../../services/pessoa";
export function Main() {

    const [firstName, setFirstName] = useState('');
    const [res, setRes] = useState([]);
    const [name, setName] = useState('');

    const getInfoByName = async () => {
        const response: any = await pessoaService.list(firstName)
        if (!response.error) {
            setRes(response[0].res);
            setName(response[0].nome);
        }
    }

    return (
        <>
        <Card>
            <div>
                <Input
                    value={firstName}
                    placeholder="Primeiro nome"
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)} />
                <Button onClick={getInfoByName} text="Obter"></Button>
            </div>
            {res.length > 0 &&
                <div>
                    <Text>
                    Nome: {name}
                    </Text>

                    {res.map(function (res: any, i) {
                        return (
                            <div key={i}>
                                <Text >{res.periodo}: {res.frequencia}</Text>
                            </div>
                        )
                    })}
                </div>
            }
            </Card>
        </>
    )
}