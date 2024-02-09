# Atividade 1 Front End 2 - Obtenha dados da altura e o sexo (M ou F) de 
# 15 pessoas e apresente os seguintes resultados:

# - A maior e a menor altura do grupo;
# - A média de altura dos homens;
# - O número de mulheres.

# Aluno: Danilo Pereira Viana - P2_B


# Guardando as informações da pesquisa

pesq_fem = 0 # Quantidade de mulheres
pesq_mas = 0 # Quantidade de homens
# Registro das alturas
pesq_alt = []
# Registro das alturas dos homens
pesq_alt_mas = []


# Coleta de dados

for i in range(15): # Repetira 15 vezes o questionario
    # Pergunta a altura da pessoa e armazena a informação
    perg_alt = float(input(f'Digite a altura da {i+1}° pessoa em Metros (Ex: 1.84): '))
    # Pergunta o sexo da pessoa e armazena a informação
    perg_sexo = input(f'Digite o sexo da {i+1}° pessoa (M ou F): ')

    pesq_alt.append(perg_alt) # Ira adicionar a resposta da altura na lista de altura

    if perg_sexo.upper() == 'M': # Se responder masculino, então:
        pesq_alt_mas.append(perg_alt) # Salva a altura dos homens na lista pesq_alt_mas
        pesq_mas += 1 # Adiciona mais 1 na variavel pesq_mas
    elif perg_sexo.upper() == 'F': # Se responder feminino, então:
        pesq_fem += 1 # Adiciona mais 1 na variavel pesq_fem


# Calculos e comparativos

pesq_alt_maior = max(pesq_alt) # Compara e armazena a maior altura da pesquisa
pesq_alt_menor = min(pesq_alt)  # Compara e armazena a menor altura da pesquisa
pesq_alt_mas_med = sum(pesq_alt_mas) / pesq_mas  # Calcula a media de altura dos homens


# Exibindo os resultados das pesquisas

print() # Espaçamento
print("Resultado da Pesquisa:") # Começa imprimir os resultados
print() # Espaçamento
print(f"A maior altura foi de {pesq_alt_maior} e a menor de {pesq_alt_menor}") # Imprime a maior e menor altura da pesquisa
print() # Espaçamento
print(f"A media de altura dos homens é de {pesq_alt_mas_med:.2f}") # Imprime a media de altura dos homens com limite de 2 casas apos o ponto
print() # Espaçamento
print(f"O numero de mulheres é de {pesq_fem}") # Imprime a quantidade de mulheres

# FIM!