# naveteam-test

IMPORTANTE: Como foi utilizada uma fake REST API (JSONPlaceholder), as requisições POST e DELETE não são persistentes. Quando uma requisição DELETE é feita, o post solicitado não é de fato deletado. Levando isso em conta, resolvi não deletar os posts na interface visual. Inicialmente realizo uma request a qual pega os posts requisitados e estes são mostrados na interface. As requisições POST e DELETE são de fato feitas, porém suas respostas acarretam somente em um alert ao usuário com o status e conteúdo da resposta.
