import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-light to-white">
        <div className="container mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">Polityka prywatności</span>
          </motion.h1>

          <motion.div
            className="prose max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">I. Postanowienia ogólne</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Polityka prywatności określa, jak zbierane, przetwarzane i przechowywane są dane osobowe Użytkowników niezbędne do świadczenia usług drogą elektroniczną za pośrednictwem serwisu internetowego www.ofchat.pl (dalej: Serwis).
                  </p>
                  <p>
                    Serwis zbiera wyłącznie dane osobowe niezbędne do świadczenia i rozwoju usług w nim oferowanych.
                  </p>
                  <p>
                    Dane osobowe zbierane za pośrednictwem Serwisu są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych, dalej RODO) oraz ustawą o ochronie danych osobowych z dnia 10 maja 2018 r.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">II. Administrator danych</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Administratorem danych osobowych zbieranych poprzez Serwis jest CLICKCHAT, NIP: 6351873053, REGON: 540076700, adres poczty elektronicznej: contact@ofchat.pl (dalej: Administrator).
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">III. Cel zbierania danych osobowych</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Dane osobowe wykorzystywane są w celu:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>rejestracji konta i weryfikacji tożsamości Użytkownika,</li>
                    <li>umożliwienia logowania do Serwisu,</li>
                    <li>realizacji umowy dotyczącej usług i e-usług,</li>
                    <li>komunikacji z Użytkownikiem (livechat, formularz kontaktowy itp.)</li>
                    <li>wysyłki newslettera (po wyrażeniu zgody Użytkownika na jego otrzymywanie),</li>
                    <li>prowadzenia systemu komentarzy,</li>
                    <li>świadczenia usług społecznościowych,</li>
                    <li>promocji oferty Administratora,</li>
                    <li>marketingu, remarketingu, afiliacji,</li>
                    <li>personalizacji Serwisu dla Użytkowników,</li>
                    <li>działań analitycznych i statystycznych,</li>
                    <li>windykacji należności,</li>
                    <li>ustalenia i dochodzenia roszczeń albo obrony przed nimi.</li>
                  </ul>
                  <p>Podanie danych jest dobrowolne, ale niezbędne do zawarcia umowy albo skorzystania z innych funkcjonalności Serwisu.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">IV. Rodzaj przetwarzanych danych osobowych</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Administrator może przetwarzać dane osobowe Użytkownika: imię i nazwisko, data urodzenia, adres zamieszkania, adres e-mail, numer telefonu, NIP.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">V. Okres przetwarzania danych osobowych</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Dane osobowe Użytkowników będą przetwarzane przez okres:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>gdy podstawą przetwarzania danych jest wykonanie umowy – do momentu przedawnienia roszczeń po jej wykonaniu,</li>
                    <li>gdy podstawą przetwarzania danych jest zgoda – do momentu jej odwołania, a po odwołaniu zgody do przedawnienia roszczeń.</li>
                  </ul>
                  <p>W obu przypadkach termin przedawnienia wynosi 6 lat, a dla roszczeń o świadczenia okresowe i roszczeń dotyczących prowadzenia działalności gospodarczej – 3 lata (jeśli przepis szczególny nie stanowi inaczej).</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">VI. Udostępnianie danych osobowych</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Dane osobowe Użytkowników mogą być przekazywane: podmiotom powiązanym z Administratorem, jego podwykonawcom, podmiotom współpracującym z Administratorem np. firmom obsługującym e-płatności, firmom świadczącym usługi kurierskie/pocztowe, kancelariom prawnym.</p>
                  <p>Dane osobowe Użytkowników nie będą przekazywane poza teren Europejskiego Obszaru Gospodarczego (EOG).</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">VII. Prawa Użytkowników</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Użytkownik Serwisu ma prawo do: dostępu do treści swoich danych osobowych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, wniesienia sprzeciwu wobec przetwarzania, cofnięcia zgody w każdej chwili (co nie ma wpływu na zgodność z prawem przetwarzania dokonanego w oparciu o zgodę przed jej cofnięciem).</p>
                  <p>Zgłoszenie o wystąpieniu przez Użytkownika z uprawnieniem wynikającym z wymienionych praw należy przesłać na adres contact@ofchat.pl.</p>
                  <p>Administrator spełnia lub odmawia spełnienia żądania niezwłocznie – maksymalnie w ciągu miesiąca od jego otrzymania.</p>
                  <p>Użytkownik ma prawo złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uzna, że przetwarzanie narusza jego prawa i wolności (RODO).</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">VIII. Pliki cookies</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Serwis zbiera informacje za pomocą plików cookies – sesyjnych, stałych i podmiotów zewnętrznych.</p>
                  <p>Zbieranie plików cookies wspiera poprawne świadczenie usług w Serwisie i służy celom statystycznym.</p>
                  <p>Użytkownik może określić zakres dostępu plików cookies do swojego urządzenia w ustawieniach przeglądarki.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">IX. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Dane Użytkowników nie mogą być przetwarzane w zautomatyzowany sposób tak, że na skutek tego mogłyby zapaść wobec nich jakiekolwiek decyzje.</p>
                  <p>Dane Użytkowników mogą być profilowane celem dostosowania treści i personalizacji oferty po wyrażeniu przez nich zgody.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-dark">X. Postanowienia końcowe</h2>
                <div className="space-y-4 text-gray-700">
                  <p>Administrator ma prawo do wprowadzenia zmian w Polityce prywatności, przy czym prawa Użytkowników nie zostaną ograniczone.</p>
                  <p>Informacja o wprowadzonych zmianach pojawi się w formie komunikatu dostępnego w Serwisie.</p>
                  <p>W sprawach nieuregulowanych w niniejszej Polityce prywatności obowiązują przepisy RODO i przepisy prawa polskiego.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;