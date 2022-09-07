export default class Global{
    static funcaoGenero(sexo){
        switch(sexo){
            case '': return 'Todos';
            case 'F': return 'Feminino';
            case 'M': return 'Masculino';
            case 'N': return 'Unissex';
            case 'C': return 'Todos os produtos';
            default: return '';
        }
      }
}