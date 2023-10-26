import { Gift, Hammer, Lightning, RocketLaunch } from "@phosphor-icons/react";
import bg from "../assets/bg.png";
import { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function handleValueInput(e) {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(email)) {
      setShowModal(true);
    } else {
      setShowAlert(true);
    }
  }

  return (
    <div className="w-full max-sm:px-4 relative h-full">
      <div className="w-full -z-10 justify-end flex absolute">
        <div className="w-2/4 max-sm:w-full">
          <img className="object-cover" src={bg} alt="" />
        </div>
      </div>

      <div className="w-full gap-8 h-full flex flex-col max-sm:justify-start justify-center px-[112px] max-sm:p-0">
        <div className="w-[482px] max-sm:text-center max-sm:w-full flex flex-col gap-8">
          <div className="mt-10">
            <span className="text-base text-gradient">
              NEWSLETTER EXCLUSIVA
            </span>
            <h1 className="text-5xl">Workspace inspiration</h1>
          </div>
          <div>
            <span className="text-[#C4C4CC]">
              Assine nosso newsletter e transforme seu espaço de trabalho em um
              oásis de produtividade!
            </span>
          </div>
          <form onSubmit={handleValueInput} className="w-full flex gap-2">
            <input
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[291px] px-3 py-4 gap-3 focus:border focus:border-[#c7afff] outline-none rounded bg-[#202024]"
            />
            <button
              onClick={handleValueInput}
              className="p-4 rounded flex items-center justify-center gap-2 bg-gradient-to-r from-[#996dff] to-[#c7afff]"
            >
              QUERO RECEBER
            </button>
          </form>
        </div>

        <div className="mt-40 max-sm:mt-10 max-sm:grid flex gap-10 max-sm:gap-0 max-sm:grid-cols-2 max-sm:gap-2.4rem w-full rounded-lg sm:grid-cols-1">
          <div className="flex flex-col gap-4 max-w-[274px]">
            <div className="w-12 h-12 bg-[#323238] flex items-center justify-center">
              <Gift size={36} weight="fill" color="#FDD888" />
            </div>
            <div>
              <h1 className="text-lg font-bold">As últimas inovações</h1>
              <span className="text-[#C4C4CC]">
                Como membro da nossa comunidade, você terá acesso a descontos e
                promoções especiais em produtos selecionados.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-[274px]">
            <div className="w-12 h-12 bg-[#323238] flex items-center justify-center">
              <RocketLaunch size={36} weight="fill" color="#55ACEE" />
            </div>
            <div>
              <h1 className="text-lg font-bold">As últimas inovações</h1>
              <span className="text-[#C4C4CC]">
                Mantenha-se atualizado com as mais recentes tecnologias e
                acessórios que vão revolucionar a forma como você trabalha.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-[274px]">
            <div className="w-12 h-12 bg-[#323238] flex items-center justify-center">
              <Lightning size={36} weight="fill" color="#FFAC33" />
            </div>
            <div>
              <h1 className="text-lg font-bold">As últimas inovações</h1>
              <span className="text-[#C4C4CC]">
                Analisamos os produtos mais populares do mercado para que você
                possa fazer as escolhas certas.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-[274px]">
            <div className="w-12 h-12 bg-[#323238] flex items-center justify-center">
              <Hammer size={36} weight="fill" color="#8899A6" />
            </div>
            <div>
              <h1 className="text-lg font-bold">As últimas inovações</h1>
              <span className="text-[#C4C4CC]">
                Aumente sua eficiência e proteja sua saúde com conselhos
                especializados sobre ergonomia e organização.
              </span>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex transition-transform duration-200 items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="w-screen h-screen flex items-center justify-center">
            <div className="text-white w-[600px] rounded gap-4 flex flex-col items-center justify-center bg-[#323238] p-8">
              <div className="w-[400px] flex gap-4 flex-col">
                <h2>Olá usuário!</h2>
                <span>
                  Obrigado por confiar em nosso Workspace; estamos determinados
                  a não desapontá-lo. Antes de prosseguirmos para a próxima fase
                  deste Workspace, precisamos realizar uma verificação de seu
                  e-mail.
                </span>

                <h1 className="text-3xl">{email}</h1>
                <span>Acesse seu email e confirme.</span>
              </div>
              <button
                className="rounded px-4 py-3 bg-gradient-to-r from-[#996dff] to-[#c7afff]"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="w-screen h-screen flex items-center justify-center">
            <div className="text-white bg-[#323238] rounded p-8 flex flex-col items-center justify-center gap-4">
              <p>E-mail inválido. Por favor, insira um e-mail válido.</p>
              <button
                className="rounded px-4 py-3 bg-gradient-to-r from-[#996dff] to-[#c7afff]"
                onClick={() => setShowAlert(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
