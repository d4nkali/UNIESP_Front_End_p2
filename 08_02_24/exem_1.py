# Atividade 1 Front End 2 - Obtenha dados da altura e o sexo (M ou F) de 
# 15 pessoas e apresente os seguintes resultados:

# - A maior e a menor altura do grupo;
# - A média de altura dos homens;
# - O número de mulheres.

# Aluno: Danilo Pereira Viana - P2_B

# Guardando as informações da pesquisa

pesq_fem = 6 # Quantidade de mulheres
pesq_mas = 9 # Quantidade de homens
# Registro das alturas
pesq_alt = [1.70, 2.00, 1.76, 1.52, 1.74, 1.63, 1.87, 1.92, 1.71, 1.99, 2.03, 1.87, 1.59, 1.78, 1.88]
# Registro das alturas dos homens
pesq_alt_mas = [2.00, 1.76, 1.99, 2.03, 1.92, 1.88, 1.87, 1.70, 1.52]

# Calculos e comparativos

pesq_alt_maior = max(pesq_alt) # Compara e armazena a maior altura da pesquisa
pesq_alt_menor = min(pesq_alt)  # Compara e armazena a menor altura da pesquisa
pesq_alt_mas_med = sum(pesq_alt_mas)/9  # Calcula a media de altura dos homens

# Exibindo os resultados das pesquisas

print("Resultado da Pesquisa:")
print() # Espaçamento
print("A maior altura foi: ", pesq_alt_maior, " e a minima de: ", pesq_alt_menor) # Imprime a maior e menor altura da pesquisa
print() # Espaçamento
print("A media de altura dos homens é de: ", pesq_alt_mas_med) # Imprime a media de altura dos homens
print() # Espaçamento
print("O numero de mulheres é de: ", pesq_fem) # Imprime a quantidade de mulheres