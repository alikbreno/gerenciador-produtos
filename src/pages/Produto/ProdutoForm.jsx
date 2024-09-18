import React, { useEffect, useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { useParams } from 'react-router-dom'

const ProdutoForm = () => {

const [produtos, setProdutos] = useState({ nome: '', preco: '', descricao: '', quantidadeEstoque: '', })
const [abrirDuvida, setAbrirDuvida] = useState(false)
const { id } = useParams()

  const AbreFechaDuvida = () => {
    setAbrirDuvida(!abrirDuvida)
  }

  return (
    <div>
      <h2>
        {id ? 'Editar Produto' : 'Criar Produto'}
        <FaQuestionCircle onClick={AbreFechaDuvida}/>
        {abrirDuvida && (<h2>{id ? 'Nessa página você pode editar produtos já existentes' : 'Nessa página você pode  criar novos produtos'}</h2>)}
      </h2>
      
      <form>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input 
            type="text" 
            name="nome" 
            id="nome" 
            value={produtos.nome} 
            onChange={e => setProdutos({...produtos, nome: e.target.value})} 
            required
          />
        </div>
        <div>
          <label htmlFor="preco">Preço: </label>
          <input type="text" name="preco" id="preco" value={produtos.preco} onChange={e => setProdutos({...produtos, preco: e.target.value})} required/>
        </div>
        <div>
          <label htmlFor="descricao">Descrição: </label>
          <input type="text" name="descricao" id="descricao" value={produtos.descricao} onChange={e => setProdutos({...produtos, descricao: e.target.value})} required/>
        </div>
        <div>
          <label htmlFor="quantidadeEstoque">Quantidade em Estoque: </label>
          <input type="text" name="quantidadeEstoque" id="quantidadeEstoque" value={produtos.quantidadeEstoque} onChange={e => setProdutos({...produtos, quantidadeEstoque: e.target.value})} required/>
        </div>
        <button></button>
      </form>
    </div>
  )
}

export default ProdutoForm
