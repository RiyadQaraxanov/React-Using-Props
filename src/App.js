import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import "./components/styles.css"
import ejder from "./komodo.jpg"
import panda from "./panda.jpg"
import gisnt from "./gisnt.jpg"

function App(props) {
  return (
    <div className="App">
      <Card 
        ad={ejder}
        about={"Varanus komodoensis veya Komodo ejderi, Varanus cinsine bağlı bir sürüngen türüdür.[4] Endonezya'nın Komodo, Rinca, Flores ve Gili Motang adalarına özgüdür. Maksimum 3 metre (10 ft) uzunluğa ulaşan ve yaklaşık 70 kilograma (150 lb) kadar çıkan mevcut en büyük kertenkele türüdür."}
        name={"Komodo ejderi"}
      />
      <Card 
        ad={panda}
        about={"Panda yavruları yetişkin pandalara göre çok küçüktürler. Doğduklarında ortalama 100 gram ağırlığında olurlar. Yeni doğan pandalar her iki saatte bir emzirilme ihtiyacı duyarlar. Beslenme aralarında da anne genelde yavrularını bırakmaz, ön ayaklarının üstünde onları taşımaya devam eder. Hareket halindeyken de yavrularını nazikçe ağzında taşır. Yavrular üç aylık olduğunda yürümeye başlarlar."}
        name={"Panda"}
      />
      <Card 
        ad={gisnt}
        about={"Su aygırı veya Hipopotam (Hippopotamus amphibius), çift toynaklılar (Artiodacyla) takımının su aygırıgiller (Hippopotamidae) familyasından, geviş getirmeyen, iri gövdeli otçul bir memeli. Bu familyanın diğer mevcut türü ormanda yaşayan cüce suaygırıdır (Hexapotodon liberiensis)."}
        name={"Su aygırı"}
      
      />
    </div>
  );
}

export default App;
