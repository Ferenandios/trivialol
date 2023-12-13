import { FC } from "react";
import Text from "./Text/Text";
import Photo from "./Photo/Photo";
import Button from "./Button/Button";
import Title from "./Title/Title";

const About: FC = (): JSX.Element => {
  const textList: string[] = [
    "Браузерная онлайн-игра для троих игроков, в которой главная задача - завоевание территорий на карте России. В самом начале каждый из знатоков выбирает себе провинцию, где будет расположен его замок. После этого, отвечая на разные вопросы, делится остальная свободная территория. Затем, выбрав территорию соперника, игроки, также отвечая на вопросы, захватывают провинции друг друга. Победит тот, кто в конце наберет большее количество очков.",
    "Игра будет сделана на основе сайта Triviador, существовавшего c 2002 года до прекращения поддержки Adobe Flash Player в 2021 году. Запрос “Triviador” на YouTube показывает, что она не забыта. Нам необходимо создать собственную версию этой замечательной игры с применением векторной графики, ИИ, идеального, оптимизированного кода и потрясающей системы доната. Сайт будет простым в освоении для всех возрастов.",
  ];
  return (
    <>
      <div className="flex flex-col pt-8 sm:pt-7 sm:hidden">
        <div className="hidden sm:block">
          <Title />
        </div>
        <Text text={textList[0]} />
        <Photo />
        <Button />
        <Text text={textList[1]} />
      </div>

      <div className="hidden pt-8 sm:pt-7 sm:block sm:px-4 md:pt-8">
        <div className="hidden sm:block">
          <Title />
        </div>
        <div className="flex mt-8 md:justify-center">
          <div className="md:order-1 md:ml-5 lg:flex lg:flex-col lg:justify-between lg:h-[460px]">
            <Text text={textList[0]} />
            <Text text={textList[1]} />
            <div className="hidden lg:block">
              <Button />
            </div>
          </div>
          <div className="flex flex-col sm:ml-4 md:ml-0">
            <Photo />
            <div className="lg:hidden">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
