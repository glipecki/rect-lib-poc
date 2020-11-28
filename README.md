# rect-lib-poc

Możliwe podejścia do tematu?

- Czy mamy monorepo?
  - Dowolne narzędzie wspierające monorepo powinno obsługiwać liby i zarządzanie nimi. - nx, lerna,
- Lib to tylko forma współdzielenia kodu, nie musi być niezależnie zarządzany, każdy z dostępem będzie mógł robić zmiany
  - Podpięcie kodów jako git submodule
- Czy lib ma być publikowalny, samodzielnie zarządzany, wydawany i dołączany do różnych projektów?
  - Przygotowanie liba jako niezależny projekt, publikacja, itp - przykładowo nx lub dowolny inny znany sposób
  - Codzienna praca z libem
    - Budowanie, publikacja, podbicie zależonści
    - yarn/npm link - **demo w tym repozytorium**