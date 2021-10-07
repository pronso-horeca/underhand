import React from "react";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { Helmet } from "react-helmet";

export const wrapRootElement = ({ element }) => {
  return (
    <PlasmicRootProvider>
      <Helmet>
        <title>Underhand — Speakeasy бар захований в серці Троєщини</title>
        <meta name='description' content="Ми цінуємо людину і спілкування — хочемо, аби у тебе була можливість знайти для себе місце, де можеш не соромитись, бути свіжим, спілкуватись без перешкод, зустрічати цікавих людей, дізнаватись щось нове про когось і головне — про себе. Наші коктейлі смачні — всім зрозуміло і це легко перевірити. Але мало хто знає про коктейлі стільки як наші майстри — в цьому наша унікальність — ти п'єш коктейль і дізнаєшся його історію. Прийти в Underhand — дізнатись щось нове про себе через призму цікавого поєднання смаків твого персонального коктейля — бармен розуміє вас і знає, що тобі потрібно саме зараз" />
      </Helmet>
      {element}
    </PlasmicRootProvider>
  );
}
