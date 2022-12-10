import { PessoaProps, Error } from './../types/index';
import api from './api';

class PessoaService{
    async list(nome: string): Promise<PessoaProps[] | Error> {
        try {
            const { data } = await api.get("/nomes/" + nome);
            return data;
        }
        catch{
            return {error: 'erro'}
        }
    } 

}

export default new PessoaService()