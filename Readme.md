**RF** => Requisitos Funcionais 

**RF** => Requisitos não Funcionais

**RF** => Regra de negócio

# Cadastro de carro 
**RF**
Deve ser posssível cadastrar um novo carro
deve ser possível listar todas as categorias

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
o carro deve ser cadastrado com disponibilidade por padrão.
o usuário responsável pelo cadastro dever ser um adm.
# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíves.
deve ser possível listar todos os carros disponíves pelo nome da categoria
deve ser possível listar todos os carros disponíves pelo nome da marca
deve ser possível listar todos os carros disponíves pelo nome do carro
**RN**
O usuário não precisar estar logado no sistema.

# cadastro de especificação no carro

**RF**
deve ser possível cadastar uma especificação para um carro
deve ser possível listar todas as espeficicações
deve ser possiveç listar todos os carros
**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
o usuário responsável pelo cadastro deve ser um usuário adm
 
 # Cadastro de imagens do carro 

 **RF**
  deve ser possível cadastrar a imagem do carro
  deve ser possível listar todos os carros
  **RNF**
  Utilizar o multer para upload dos arquivos
 
 **RN**
 o usuário deve poder cadastrar mais de uma imagem para o mesmo carro
 o usuário responsável pelo cadastrado deve ser um adm

 # Aluguel de carro

 **RF**
  deve ser possível cadastrar um aluguel 
deve ser possível editar e deletar carros
 **RN**
 o Aluguel deve ter duração mínima de 24 hora
 Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
 Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
