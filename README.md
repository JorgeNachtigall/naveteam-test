﻿# naveteam-test

IMPORTANTE: Como foi utilizada uma fake REST API (JSONPlaceholder), as requisições POST e DELETE não são persistentes. Ao uma requisição DELETE ser feita, o post solicitado não é de fato deletado. Levando isso em conta, resolvi não deletar os posts na interface visual. Inicialmente realizo uma request a qual pega os posts requisitados e estes são monstrados na interface. As requisições POST e DELETE emitem somente um alert ao usuário com o o status e conteúdo da resposta.
