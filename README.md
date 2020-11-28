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

**Po co mi aliasy/pathy?**
React nie lubi gdy w runtime wpadnie więcej niż jedna instanacja React (różnie osiągalna, nawet jeśli to ta sama wersja).
Konfiguracja tsconfig/webpack pozwala wymusić w miejscu rozwiązania użycie zawsze tej samej definicji React.
To jest niedogodność wprost wynikająca z użycia react + yarn/npm link (https://github.com/facebook/react/issues/14257).
Problem nie występuje przy budowaniu/uruchamianiu liba w wersji z repozytorium npm (czyli tak jak np. budować będzie CI czy uruchamiać osoby nie pracujące nad libem).

https://youtu.be/13Tv76mHT_4
