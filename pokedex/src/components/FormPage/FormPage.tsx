import React, { ChangeEvent, FormEvent, useState } from 'react';
import { FaMars, FaVenus } from 'react-icons/fa';
import { createPokemon } from '../../services/services';
import styles from './FormPage.module.css';

interface FormularioState {
  nome: string;
  genero: string; // Alterado para string, pois o valor será "Macho" ou "Fêmea"
  tipo: string;
  imagem: File | null;
  imagemBase64: string | null;
}

const Formulario: React.FC = () => {
  const [formulario, setFormulario] = useState<FormularioState>({
    nome: '',
    genero: '', // Inicializado como uma string vazia
    tipo: '',
    imagem: null,
    imagemBase64: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleImagemChange = (e: ChangeEvent<HTMLInputElement>) => {
    const imagemFile = e.target.files?.[0];
    if (imagemFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const imagemBase64 = reader.result as string;
        const convertString = imagemBase64.replace('data:image/png;base64,', '')
        setFormulario((prevFormulario) => ({
          ...prevFormulario,
          imagem: imagemFile,
          imagemBase64: convertString
        }));
      };
      reader.readAsDataURL(imagemFile);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário, por exemplo, fazer uma requisição HTTP para um servidor.
try{
  await createPokemon(formulario.nome, formulario.tipo, formulario.genero, formulario.imagemBase64, formulario.imagemBase64).then(() => console.log('Sucesso'))
}catch(err){
console.log(err)
}

  };



  return (
    <div className={styles['form-container']}>
    <form onSubmit={handleSubmit}>
        <div className={styles['form-input']}>
      <label className={styles['form-name']}>
        <h4>Nome:</h4>
        <input type="text" name="nome" value={formulario.nome} onChange={handleChange} />
      </label>
      <br />
      <label className={styles['form-gender']}>
        <h4>Gênero:</h4>
        <label className={styles['form-male']}>
          <FaMars className={styles['form-icon-male']} size={20} />
          <input
            type="radio"
            name="genero"
            value="Macho"
            checked={formulario.genero === 'Macho'}
            onChange={handleChange}
          />
        </label>
        <label className={styles['form-female']}>
          <FaVenus className={styles['form-icon-female']} size={20} />
          <input
            type="radio"
            name="genero"
            value="Fêmea"
            checked={formulario.genero === 'Fêmea'}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />
      <label>
        <h4>Tipo:</h4>
        <select name="tipo" value={formulario.tipo} onChange={handleChange}>
          <option value="">Selecione o tipo</option>
          <option value="Água">Água</option>
          <option value="Fogo">Fogo</option>
          <option value="Planta">Planta</option>
        </select>
      </label>
      <br />
      <label className={styles['form-image-input']}>
        <h4>Imagem:</h4>
        <input type="file" accept="image/*" onChange={handleImagemChange} />
      </label>
      <br />
      <button className={styles['form-button']} type="submit">Enviar</button>
      </div>
    </form>
    </div>
  );
};

export default Formulario;
