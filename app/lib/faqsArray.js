import faq20 from '@images/faq-img20.png'
import faq19 from '@images/faq-img19.png'
import faq3 from '@images/faq-img3.png'
import faq10 from '@images/faq-img10.png'
import faq30 from '@images/faq-img30.png'
import faq7 from '@images/faq-img7.png'
import faq2 from '@images/faq-img2.png'
import faq21 from '@images/faq-img21.png'
import faq17 from '@images/faq-img17.png'
import faq14 from '@images/faq-img14.png'
import faq8 from '@images/faq-img8.png'
import faq12 from '@images/faq-img12.png'

import { client } from 'app/utils/configSanity'

let feeData = {};
async function getFee(){
  try{
    const res = await client.fetch(`*[_type == 'processingFee']`)
    if (res && res?.length > 0) {
      feeData = {
        adult: res[0]?.adult,
        child: res[0]?.child
      };

      return feeData;
    } else {
      return { adult: null, child: null }; 
    }
    return feeData
  }catch(error){
    console.log(error)
    return { adult: '', child: '' };
  }
}

await getFee()

export const faqsArray = [
    // UK
    {
      "topic": "UK Visa FAQ",
      "img": faq20,
      "faqs": [
        {
          "question": "I want to apply for a UK visa, what are the requirements?",
          "answer": "To apply for a UK visa, you need an international passport, a 5x5 passport photograph, a 6-month bank statement, and work details such as an introduction letter, work ID card, and CAC registration certificate if your business is registered."
        },
        {
          "question": "How much does a UK visa application cost?",
          "answer": `The costs for UK visa applications are as follows:
            <br/>
          Super Priority Cost: $1,350<br/>
          - 2 years visa (Ikeja/Abuja): $545<br/>
          - 5 years visa (Ikeja/Abuja): $1,034<br/>
          - 10 years visa (Ikeja/Abuja): $1,288<br/>
          - 6 months visa: <br/>
          * Location Option 1: $165 + $110 for (Victoria Island Submission Center)<br/>
          * Location Option 2: $165 (Ikeja or Abuja Submision Center)<br/>
          - 2 years visa (VI + Location Fee): $590 + $110<br/>
          - 5 years visa (VI + Location Fee): $1,040 + $110<br/>
          - 10 years visa (VI + Location Fee): $1,298 + $110<br/>
          <br/><br/>
          *Service location charges differ for Victoria Island and (Ikeja, Abuja).
          <br/><br/>
          *Processing fee: ₦${feeData?.adult}(Adult), ₦${feeData?.child} (Child).`
        },
        {
          "question": "What does Visa Processing fee mean?",
          "answer": "The visa processing fee covers the completion of the application form, flight reservation, hotel reservation, document review, and advisory services based on our expertise."
        },
        {
          "question": "How long does the processing take?",
          "answer": "It could take upto 20 to 30 working days or more after submission at the embassy."
        },
        {
          "question": "What if I am not working, can I still apply?",
          "answer": "Yes, you can still apply, provided you have a sponsor."
        },
        {
          "question": "Will I go for an interview?",
          "answer": "No, but you will need to do biometrics at the TLS center in Lagos or Abuja. You can choose between self-service at no cost or assisted service, which has an additional fee."
        },
        {
          "question": "Is it compulsory I get an invitation before I apply?",
          "answer": "No, having an invitation does not guarantee a visa."
        },
        {
          "question": "Will you review my documents before I submit?",
          "answer": "Yes, we will guide you through the document review process."
        },
        {
          "question": "How much should be my closing balance?",
          "answer": "Your closing balance should be enough to cover your trip. We will provide further guidance during the process."
        },
        {
          "question": "I was just refused a visa. Can I reapply?",
          "answer": "Yes, you can reapply!"
        },
        {
          "question": "If I’m not in Lagos or Abuja, can I still apply through your company?",
          "answer": "Yes, you can. We will guide you online and via phone, and email all necessary documents to you."
        },
        {
          "question": "Is your visa guaranteed?",
          "answer": "We do not guarantee visas as issuance is at the discretion of the consular. However, based on our experience, we will guide you to improve your chances."
        },
        {
          "question": "What if I am refused a visa, will there be a refund?",
          "answer": "No, but you can reapply without paying the processing fee. You will only need to pay the visa application fee."
        },
        {
          "question": "Does your company assist with work permits?",
          "answer": "No, but we currently process Canada Express Entry, which allows you to live and work in Canada."
        },
        {
          "question": "Can I travel immediately after my visa is granted?",
          "answer": "Yes, you can travel as soon as your visa is granted."
        },
        {
          "question": "Does your company process statement accounts or work documents for clients?",
          "answer": "No, we do not process or create statement accounts or work documents for clients."
        },
        {
          "question": "Where is your office located?",
          "answer": "Our office is located in Lagos."
        },
        {
          "question": "Are you genuine and real?",
          "answer": "Yes, we are. You can visit our offices in Lagos and Abuja as seen on our website www.estacytravels.com."
        },
        {
          "question": "After getting my visa, can your company assist with accommodation/flight?",
          "answer": "Yes, we can assist with booking accommodation and flights."
        },
        {
          "question": "Do I need to have travel history before applying?",
          "answer": "No, you do not need to have travel history before applying."
        },
        {
          "question": "Can I apply for fast track?",
          "answer": "Yes, Estacy Travels fast track costs an additional fee of ₦50,000 per application (5 working days processing) or $1,350 for Super Priority (24-hour embassy processing)."
        }
      ]
    },
    // USA
    {
        "topic": "USA Visa FAQ",
        "img":faq19,
        "faqs": [
          {
            "question": "I want to apply for a USA visa, what are the requirements?",
            "answer": "You need an international passport, 5x5 white background passport photographs, and work details. Work details include either your CAC company registration certificate for business owners or a letter from your organization if employed."
          },
          {
            "question": "How much does the USA application cost?",
            "answer": `The visa fee is ₦305,250. The processing fee is ₦${feeData?.adult} for adults and ₦${feeData?.child} for children.`
          },
          {
            "question": "What does the Visa Processing fee mean?",
            "answer": "The visa processing fee is Aspom’s application fee. It covers the cost for filling out the client’s application form, guiding the client through the application process based on Aspom’s experience in visa applications, and client interview preparation."
          },
          {
            "question": "What if I am not working, can I still apply?",
            "answer": "Yes, you can still apply, provided you have a sponsor."
          },
          {
            "question": "What is the duration of the visa?",
            "answer": "The visa duration is 5 years."
          },
          {
            "question": "Is it compulsory to get an invitation from the USA before I apply?",
            "answer": "No, having an invitation does not guarantee a visa."
          },
          {
            "question": "Will I be prepared for the interview?",
            "answer": "Yes, we will guide you via a pre-interview session to understand the questions that will be asked and how to answer them."
          },
          {
            "question": "What is the required documentation needed for a USA visa?",
            "answer": "For a visit visa, documents are not compulsory. For a medical visa, a statement of account, work details, and a hospital appointment are required. For a school visa, a sponsor’s statement of account and school evidence are required. Further guidance will be provided when you start the process."
          },
          {
            "question": "How much should be my closing balance for the interview?",
            "answer": "Your closing balance should be enough to cover your trip. Further guidance will be provided during the process."
          },
          {
            "question": "I was just refused a US Visa. Can I reapply?",
            "answer": "Yes, you can reapply!"
          },
          {
            "question": "If I’m not in Lagos or Abuja, can I still apply through your company?",
            "answer": "Yes, you can. We will guide you online and via phone, and email all necessary documents to you. Please note that the interview with the USA consular is only in Lagos and Abuja."
          },
          {
            "question": "Is your US Visa guaranteed?",
            "answer": "We do not guarantee visas as issuance is at the discretion of the consular. However, based on our experience, we will guide you to improve your chances."
          },
          {
            "question": "What if I am refused a Visa will there be a refund?",
            "answer": "No, but you can reapply without paying the processing fee. You will only need to pay the USA visa application fee."
          },
          {
            "question": "Does your company assist with a work permit in the US?",
            "answer": "No, we currently process Canada Express Entry, which allows you to live and work in Canada."
          },
          {
            "question": "Can I travel immediately after my visa is granted?",
            "answer": "Yes, you can travel as soon as your visa is granted."
          },
          {
            "question": "Does your company process statement accounts or work documents for clients?",
            "answer": "No, we do not process or create statement accounts or work documents for clients."
          },
          {
            "question": "Where is your office located?",
            "answer": "Our office is located in Lagos."
          },
          {
            "question": "Are you genuine and real?",
            "answer": "Yes, we are. You can visit our offices in Lagos and Abuja as seen on our website www.estacytravels.com."
          },
          {
            "question": "After getting my visa, can your company assist with USA accommodation/flight?",
            "answer": "Yes, we can assist with booking accommodation and flights."
          },
          {
            "question": "I don’t have a travel history, have only been to African countries. Can I apply for a USA visa?",
            "answer": "Yes, you can. You can either apply with no travel history or only African countries’ history."
          },
          {
            "question": "Can I get an early date?",
            "answer": "Yes, we can do an earlier date search for you which costs ₦250,000. Please note that an early date is not guaranteed."
          },
          {
            "question": "Is an early date guaranteed?",
            "answer": "No, but if we do not get a date before your due date, the visa can be used anytime, as the USA gives a minimum of a 5-year visa."
          }
        ]
    },
    // CANADA
    {
        "topic": "Canada Visa FAQ",
        "img": faq3,
        "faqs": [
          {
            "question": "I want to apply for a Canada visa, what are the requirements?",
            "answer": "You’ll need an international passport, 6 months bank statement, 5x5 white background passport photographs, and work details such as an introduction letter, work ID card, or CAC registration certificate if the business is registered."
          },
          {
            "question": "How much does the application cost?",
            "answer": `The processing fee is ₦${feeData?.adult} per adult and ₦${feeData?.child} per child. The Canada visa fee and biometric cost $185 CAD (subject to current exchange rates). For children below 13 years, the Canada visa fee only is $100 CAD (subject to exchange rate upon submission).`
          },
          {
            "question": "What does the Visa Processing fee mean?",
            "answer": "The visa processing fee covers filling out the client’s application form, flight reservation, hotel reservation, documentation review, and advisory services based on our experience."
          },
          {
            "question": "How long does the processing take?",
            "answer": "It could take up to 6 months to a year."
          },
          {
            "question": "What if I am not working, can I still apply?",
            "answer": "Yes, you can still apply, provided you have a sponsor."
          },
          {
            "question": "What is the duration of the visa?",
            "answer": "The duration depends on the consular, but for first-time applicants, it is usually about 1 to 4 years."
          },
          {
            "question": "Is it compulsory I get an invitation before I apply?",
            "answer": "No, an invitation doesn’t guarantee a visa, but it can be an added advantage."
          },
          {
            "question": "Will you review my documents before I submit?",
            "answer": "Yes, we will guide you."
          },
          {
            "question": "How much should be on my closing balance?",
            "answer": "Your closing balance should be enough to cover your trip. Further guidance will be provided during the process."
          },
          {
            "question": "I was just refused a Visa. Can I reapply?",
            "answer": "Yes, you can reapply!"
          },
          {
            "question": "If I’m not in Lagos or Abuja, can I still apply through your company?",
            "answer": "Yes, you can. We will guide you online, via phone, and email all necessary documents to you."
          },
          {
            "question": "Is your Visa guaranteed?",
            "answer": "We do not guarantee visas as issuance is at the discretion of the consular. However, based on our visa knowledge and experience, we will guide you for better chances."
          },
          {
            "question": "What if I am refused a Visa will there be a refund?",
            "answer": "No, but you can reapply without paying the processing fee. You will only need to pay the visa application fee."
          },
          {
            "question": "Does your company assist with a work permit?",
            "answer": "Yes, we currently process Canada Express Entry, which allows you to live and work in Canada."
          },
          {
            "question": "Can I travel immediately after my visa is granted?",
            "answer": "Yes, you can."
          },
          {
            "question": "Does your company process statement accounts or work documents for clients?",
            "answer": "No, we don’t process or create statement accounts or work documents for clients."
          },
          {
            "question": "After getting my visa, can your company assist with accommodation/flight?",
            "answer": "Yes, we can assist with booking accommodation and flights."
          },
          {
            "question": "If I give birth in Canada, will my child become a citizen?",
            "answer": "Yes, your child will automatically become a citizen of Canada."
          },
          {
            "question": "Will I go for an interview?",
            "answer": "No. Canada uses paper submission at VFS or online."
          },
          {
            "question": "Do I need to have travel history before applying?",
            "answer": "No, you don’t need to have travel history, but it is an added advantage."
          }
        ]
    },
    // AUSTRALIA
    {
        "topic": "Australia Visa FAQ",
        "img": faq10,
        "faqs": [
          {
            "question": "I want to apply for an Australia visa, what are the requirements?",
            "answer": "You’ll need an international passport, 6 months bank statement, 1 passport photograph (45mm x 35 mm), and work details such as an introduction letter, work ID card, CAC registration certificate if the business is registered, and a polio vaccine certificate."
          },
          {
            "question": "How much does the application cost?",
            "answer": `A) Processing fee – ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.\nB) Australia Visa fee – $147 USD.`
          },
          {
            "question": "What does Visa Processing fee mean?",
            "answer": "The visa processing fee covers filling out the client’s application form, flight reservation, hotel reservation, and advisory services based on our experience."
          },
          {
            "question": "How long does the processing take?",
            "answer": "It takes 60 working days or more after biometrics."
          },
          {
            "question": "What if I am not working, can I still apply?",
            "answer": "Yes, you can still apply, provided you have a sponsor."
          },
          {
            "question": "What is the duration of the visa?",
            "answer": "This depends on the consular."
          },
          {
            "question": "Is it compulsory I get an invitation before I apply?",
            "answer": "No, an invitation doesn’t guarantee a visa, but it can be an added advantage."
          },
          {
            "question": "Will you review my documents before I submit?",
            "answer": "Yes, we will guide you."
          },
          {
            "question": "How much should be on my closing balance?",
            "answer": "Your closing balance should be enough to cover your trip. Further guidance will be given to you during the process."
          },
          {
            "question": "I was just refused a Visa. Can I reapply?",
            "answer": "Yes, you can reapply!"
          },
          {
            "question": "If I’m not in Lagos or Abuja, can I still apply through your company?",
            "answer": "Yes, you can. We will guide you online, via phone, and email all necessary documents to you."
          },
          {
            "question": "Is your Visa guaranteed?",
            "answer": "We do not guarantee visas as issuance is at the discretion of the consular. However, based on our visa knowledge and experience, we will guide you for better chances."
          },
          {
            "question": "What if I am refused a Visa will there be a refund?",
            "answer": "No, but you can reapply without paying the processing fee. You will only need to pay the visa application fee."
          },
          {
            "question": "Does your company assist with work permit?",
            "answer": "No, we do not process work visas. However, with a study visa, you have access to a two-year-old work permit."
          },
          {
            "question": "Can I travel immediately after my visa is granted?",
            "answer": "Yes, you can."
          },
          {
            "question": "Does your company process statement accounts or work documents for clients?",
            "answer": "No, we don’t process or create statement accounts or work documents for clients."
          },
          {
            "question": "After getting my visa, can your company assist with accommodation/flight?",
            "answer": "Yes, we can assist with booking accommodation and flights."
          },
          {
            "question": "Will I go for an interview?",
            "answer": "No, Australia visa processing is online, and biometrics are done in Lagos or Abuja."
          },
          {
            "question": "Do I need to have travel history before applying?",
            "answer": "No, you don’t need to have travel history, but it is an added advantage."
          }
        ]
    },
    // UKRAINE
    {
        "topic": "Ukraine Visa FAQ",
        "img": faq30,
        "faqs": [
          {
            "question": "I want to apply for a Ukraine visa, what are the requirements?",
            "answer": "You'll need an international passport, 5X5 white background passport photograph, statement of account, and work details such as an introduction letter, CAC registration certificate if the business is registered."
          },
          {
            "question": "How much does the application cost?",
            "answer": `A) Processing fee – ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.\nB) Visa fee is about ₦27,000 for single entry (Payable at the embassy or VFS during submission).`
          },
          {
            "question": "What does Visa Processing fee mean?",
            "answer": "The visa processing fee covers filling of client’s application form, flight Reservation, Hotel Reservation, and advisory services."
          },
          {
            "question": "How long does the processing take?",
            "answer": "From 10 working days, this period may be extended up to 30 working days if additional checks are necessary. There is also an urgent processing option available, which takes about 5 working days."
          },
          {
            "question": "What if I am not working, can I still apply?",
            "answer": "Yes, you can still apply, provided you have a sponsor."
          },
          {
            "question": "What is the duration of the visa?",
            "answer": "This depends on the consular, with a minimum of 6 months depending on supporting documents, but cannot be issued for more than a 5-year term."
          },
          {
            "question": "Is it compulsory to get an invitation before I apply?",
            "answer": "No, an invitation doesn’t guarantee a visa."
          },
          {
            "question": "Will you review my documents before I submit?",
            "answer": "Yes, we will guide you."
          },
          {
            "question": "How much should be on my closing balance?",
            "answer": "Enough to cover your trip. Further guidance will be given to you during the process."
          },
          {
            "question": "I was just refused a Visa. Can I reapply?",
            "answer": "Yes, you can reapply!"
          },
          {
            "question": "If I’m not in Lagos or Abuja, can I still apply through your company?",
            "answer": "Yes, you can. We will guide you online, via phone, and email all necessary documents to you."
          },
          {
            "question": "Is your Visa guaranteed?",
            "answer": "We do not guarantee Visa as Visa issuance is at the discretion of the consular. However, based on our visa knowledge and experience, we will guide you for better chances."
          },
          {
            "question": "What if I am refused a Visa will there be a refund?",
            "answer": "No."
          },
          {
            "question": "Does your company assist with work permit?",
            "answer": "Yes, we presently process Canada Express Entry which allows you to live and work in Canada."
          },
          {
            "question": "Can I travel immediately after my visa is granted?",
            "answer": "Yes, you can."
          },
          {
            "question": "Does your company process statement accounts or work documents for clients?",
            "answer": "No, we don’t."
          },
          {
            "question": "After getting my visa, can your company assist with accommodation/flight?",
            "answer": "Yes, we can."
          },
          {
            "question": "Do I need to have travel history before applying?",
            "answer": "No, you don’t need to have travel history."
          }
        ]
    },
    // MALAYSIA
    {
        topic: "Malaysia Visa FAQ",
        "img": faq7,
        faqs: [
          {
            question: "I want to apply for a Malaysia visa, what are the requirements?",
            answer: "International passport, 6 cm x 5 cm white background passport photograph, statement of account and Work details i.e., introduction letter, CAC registration certificate if business is registered, Yellow Fever Certificate, Original and copy of the National Drug Law Enforcement Agency (NDLEA) Certificate (for all first-time traveler) and applicants that have travelled to Argentina."
          },
          {
            question: "How much does the Malaysia visa application cost?",
            answer: `A) Processing fee – ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.\n\nB) Visa fee (Non-Refundable) is about N12,000 at the VFS Malaysia visa application center in Abuja.`
          },
          {
            question: "What does Visa Processing fee mean?",
            answer: "Visa processing fee covers filling of client’s application form, flight Reservation, Hotel Reservation and advisory services."
          },
          {
            question: "How long does the Malaysia visa processing take?",
            answer: "It takes from 10 working days after submission. However, visa applicants should bear in mind that each application is subject to an individual assessment and processing time may vary."
          },
          {
            question: "What if I am not working, can I still apply for a Malaysia visa?",
            answer: "Yes, you can, provided you have a sponsor."
          },
          {
            question: "What is the duration of the Malaysia visa?",
            answer: "The visa is valid for 14 days only."
          },
          {
            question: "Is it compulsory to get an invitation before I apply for a Malaysia visa?",
            answer: "No, invitation doesn’t guarantee a visa."
          },
          {
            question: "Will you review my documents before I submit them for Malaysia visa application?",
            answer: "Yes, we will guide you."
          },
          {
            question: "How much should be on my closing balance for a Malaysia visa?",
            answer: "Enough to cover your trip, further guide will be given to you during the process."
          },
          {
            question: "I was just refused a Malaysia visa. Can I reapply?",
            answer: "Yes, you can reapply!"
          },
          {
            question: "If I’m not in Lagos or Abuja, can I still apply through your company for a Malaysia visa?",
            answer: "Yes, you can, we will guide you online, via phone and we will email all documents to you."
          },
          {
            question: "Is your Malaysia Visa guaranteed?",
            answer: "We do not guarantee Visa as Visa issuance is at the discretion of the consular, however based on our visa knowledge and experience, we will guide you for better chances."
          },
          {
            question: "What if I am refused a Malaysia Visa, will there be a refund?",
            answer: "No, but you can reapply without paying processing fee. (you will be required to pay the visa application fee only)."
          },
          {
            question: "Does your company assist with work permit for Malaysia?",
            answer: "No, we do not process work visa. However, with a study visa, you have access to a two-year work permit."
          },
          {
            question: "Can I travel immediately after my Malaysia visa is granted?",
            answer: "Yes, you can."
          },
          {
            question: "Does your company process statement account or work document for Malaysia visa application?",
            answer: "No, we don’t."
          },
          {
            question: "Where is your office located?",
            answer: "Lagos."
          },
          {
            question: "Are you genuine and real?",
            answer: "Yes, we are. You can visit our office in Lagos and Abuja as seen on our website www.aspomtravels.com"
          },
          {
            question: "After getting my Malaysia visa, can your company assist with accommodation/Flight?",
            answer: "Yes, we can."
          },
          {
            question: "Do I need to have travel history before applying for a Malaysia visa?",
            answer: "No, you don’t need to have travel history."
          }
        ]
    },
    // BRAZIL
    {
        topic: "Brazil Visa FAQ",
        "img": faq2,
        faqs: [
          {
            question: "I want to apply for a Brazilian visa, what are the requirements?",
            answer: "Six months valid international passport, 2 recent passport photographs, work details, 3-month bank statements with reference letter and other supporting documents."
          },
          {
            question: "How much does the Brazilian application cost?",
            answer: `Estacy Travels Processing Fee: Per Adult ₦${feeData?.adult}, Per Child ₦${feeData?.child}. Embassy Visa fee and Insurance ₦169,100.`
          },
          {
            question: "What does Visa Processing fee mean?",
            answer: "Visa processing fee is Aspom’s application fee. It is the cost for filling of client’s application form, guiding client through the application process based on Aspom’s experience in visa application."
          },
          {
            question: "How long does the processing take?",
            answer: "It takes about 1 month and more after submission."
          },
          {
            question: "What if I am not working, can I still apply?",
            answer: "Yes, you can, provided you have a sponsor."
          },
          {
            question: "What is the duration of the visa?",
            answer: "It takes about 3 months but could be extended for another 3 months in Brazil."
          },
          {
            question: "Is it compulsory I get an invitation before I apply?",
            answer: "No, invitation doesn’t guarantee a visa."
          },
          {
            question: "How much should be my closing balance?",
            answer: "Enough to cover your trip, further guide will be given to you during the process."
          },
          {
            question: "I was just refused Brazilian Visa. Can I reapply?",
            answer: "Yes, you can."
          },
          {
            question: "Is Brazilian Visa guaranteed?",
            answer: "We do not guarantee Visa as Visa issuance is at the discretion of the consular, however based on our visa knowledge and experience, we will guide you for better chances."
          },
          {
            question: "What if I am refused a Visa will there be a refund?",
            answer: "No, but you can reapply without paying processing fee. (you will be required to pay the visa application fee only)."
          },
          {
            question: "Can I travel immediately my visa is granted?",
            answer: "Yes, you can."
          },
          {
            question: "Does your company process statement account or work document for client?",
            answer: "No, we don’t."
          },
          {
            question: "After getting my visa, can your company assist with Brazilian accommodation/Flight?",
            answer: "Yes, we can."
          },
          {
            question: "Can I have my baby in Brazil?",
            answer: "Yes."
          },
          {
            question: "If I give birth in Brazil, will my child become a citizen?",
            answer: "Yes."
          },
          {
            question: "Will I go for an interview?",
            answer: "No, there is no interview but may be invited for an interview if need be after submission."
          }
        ]
    },
    // IRELAND
    {
        topic: "Ireland Visa FAQ",
        "img": faq21,
        faqs: [
        {
        question: "I want to apply for a Ireland visa, what are the requirement?",
        answer: "You'll need an international passport, 5X5 white background passport photograph, 6 months statement of account and Work details i.e., introduction letter, Work ID card, CAC registration certificate if the business is registered."
        },
        {
        question: "How much does visa application cost?",
        answer: `It costs ₦${feeData?.adult} per adult and ₦${feeData?.child} per child. <br/><br/>
        Embassy Service charge: ₦125,000 (payable before picking biometrics date). <br/><br/>
        Visa Fee (payable to the Embassy): <br/><br/>
        Single Entry: £60, <br/><br/>
        Multiple Entry: £100, <br/><br/>
        Transit: £25.`
        },
        {
        question: "How long does the processing take?",
        answer: "It takes 40 working days after submission or more."
        },
        {
        question: "What if I am not working, can I still apply?",
        answer: "Yes, you can, provided you have a sponsor."
        },
        {
        question: "Is it compulsory I get invitation before I apply?",
        answer: "No, an invitation doesn’t guarantee a visa."
        },
        {
        question: "Will you review my documents before I submit?",
        answer: "Yes, we will guide you."
        },
        {
        question: "Do I need to make an appointment for the submission of documents at Ireland Visa application centre?",
        answer: "No, you do not need to make an appointment for the submission of the documents."
        },
        {
        question: "Where can I pay the visa fee and service charge?",
        answer: "To submit the documents at the Visa application Lagos/Abuja, applicants can pay the visa application fee and services fee at the bank teller counter at the Visa Application Centre, Lagos/Abuja."
        },
        {
        question: "Will I be called for an interview?",
        answer: "The Embassy of Ireland holds a right to call the applicant for a personal interview. In such cases, the applicant will be directly contacted by the Embassy."
        }
        ]
    },
    // TURKEY
    {
        topic: "Turkey Visa FAQ",
        "img": faq17,
        faqs: [
        {
        question: "I want to apply for a Turkey visa, what are the requirements?",
        answer: "International passport, 6 cm x 5 cm white background passport photograph, statement of account and Work details i.e., introduction letter, CAC registration certificate if business is registered, Birth Certificate."
        },
        {
        question: "How much does the application cost?",
        answer: `A) Processing fee – ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child. Payable to Estacy Travel <br/><br/>
            B) Visa fee (Non-Refundable) 
            <br/><br/>
            LAGOS SUBMISSION<br/>
            2 weeks $320.00 <br/><br/>
            Inclusive of Lagos Center extra service charge<br/><br/>
            ABUJA SUBMISSION<br/><br/>
            2 weeks $160.00 <br/><br/>
            (Visa fee Payable in USD at submission center)<br/><br/>
            D) Compulsory passport return fee (fixed for any visa duration) – N7,500<br/><br/>
            (Payable at submission).`
        },
        {
        question: "What does Visa Processing fee mean?",
        answer: "Visa processing fee covers filling of client’s application form, flight Reservation, Hotel Reservation and advisory services."
        },
        {
        question: "How long does the processing take?",
        answer: "It takes from 15 – 20 working days after submission."
        },
        {
        question: "What if I am not working, can I still apply?",
        answer: "Yes, you can, provided you have a sponsor."
        },
        {
        question: "What is the duration of the visa?",
        answer: "This depends on the consular, its usually 90 days validity. Visitors to Turkey can stay in the country for 30 days with this visa, from their date of entry."
        },
        {
        question: "Is it compulsory I get invitation before I apply?",
        answer: "No, invitation doesn’t guarantee a visa."
        },
        {
        question: "Will you review my documents before I submit?",
        answer: "Yes, we will guide you."
        },
        {
        question: "How much should be on my closing balance?",
        answer: "Enough to cover your trip, further guide will be given to you during the process."
        },
        {
        question: "I was just refused Turkish Visa. Can I reapply?",
        answer: "Yes, you can reapply!"
        },
        {
        question: "If I’m not in Lagos or Abuja, can I still apply through your company?",
        answer: "Yes, you can, we will guide you online, via phone and we will email all documents to you."
        },
        {
        question: "Is your Visa guaranteed?",
        answer: "We do not guarantee Visa as Visa issuance is at the discretion of the consular, however based on our visa knowledge and experience, we will guide you for better chances."
        },
        {
        question: "What if I am refused a Visa will there be a refund?",
        answer: "No, but you can reapply without paying processing fee. (you will be required to pay the visa application fee only)."
        },
        {
        question: "Does your company assist with work permit?",
        answer: "NO, but we presently process Canada Express Entry which allows you to live and work in Canada."
        },
        {
        question: "Can I travel immediately my visa is granted?",
        answer: "Yes, you can."
        },
        {
        question: "Does your company process statement account or work document for client?",
        answer: "No, we don’t."
        },
        {
        question: "After getting my visa, can your company assist with accommodation/Flight?",
        answer: "Yes, we can."
        },
        {
        question: "Do I need to have travel history before applying?",
        answer: "No, you don’t need to have travel history."
        },
        {
        question: "What is the validity of the visa?",
        answer: "The visa is usually 90 days validity from the issuance date."
        }
        ]
    },
    //SOUTH AFRICA 
    {
        "topic": "South Africa Visa FAQ",
        "img": faq14,
        "faqs": [
            {
                "question": "I want to apply for a South Africa visa, what are the requirements?",
                "answer": "You'll need an international passport, yellow fever card, work details (introduction letter, CAC registration certificate if business is registered), and 3 months bank statements with a reference letter for Lagos (applicable to Lagos and Abuja)."
            },
            {
                "question": "How much does the South Africa application cost?",
                "answer": `A) Processing fee – ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.\nB) VFS SERVICE CHARGE – N37,700 (Payable at VFS)\nC) ONLINE VISA FEE $97 (Either Paid by Client or to us to help pay during submission of the application).`
            },
            {
                "question": "What does Visa Processing fee cover?",
                "answer": "Our processing fee covers filling of client’s application form, flight Reservation, Hotel Reservation and advisory services."
            },
            {
                "question": "How long does the embassy take to process the application?",
                "answer": "It takes 3 to 4 weeks after application submission."
            },
            {
                "question": "What if I am not working, can I still apply?",
                "answer": "Yes, you can, provided you have a sponsor."
            },
            {
                "question": "What is the duration of the visa?",
                "answer": "It depends on the consular (from 1 month and above)."
            },
            {
                "question": "Is it compulsory I get invitation from SA before I apply?",
                "answer": "No, invitation doesn’t guarantee a visa."
            },
            {
                "question": "Will you review my documents before I submit?",
                "answer": "Yes, we will guide you."
            },
            {
                "question": "How much should be on my closing balance?",
                "answer": "Enough to cover your trip, further guide will be given to you during the process."
            },
            {
                "question": "I was just refused Visa. Can I reapply?",
                "answer": "Yes, you can reapply!"
            },
            {
                "question": "If I’m not in Lagos or Abuja, can I still apply through your company?",
                "answer": "Yes, you can, we will guide you online, via phone and we will email all documents to you. Please note submission is in Lagos and Abuja."
            },
            {
                "question": "Is your Visa guaranteed?",
                "answer": "We do not guarantee Visa as Visa issuance is at the discretion of the consular however, based on our visa knowledge and experience, we will guide you for better chances."
            },
            {
                "question": "What if I am refused a Visa will there be a refund?",
                "answer": "No, but you can reapply without paying processing fee. (you will be required to pay the visa application fee only)."
            },
            {
                "question": "Does your company assist with work permit?",
                "answer": "No."
            },
            {
                "question": "Can I travel immediately my visa is granted?",
                "answer": "Yes, you can."
            },
            {
                "question": "Does your company process statement account or work document for client?",
                "answer": "No, we don’t."
            },
            {
                "question": "After getting my visa, can your company assist with accommodation/Flight?",
                "answer": "Yes, we can."
            }
        ]
    },
    // MEXICO
    {
        "topic": "Mexico Visa FAQ",
        "img": faq8,
        "faqs": [
            {
                "question": "I want to apply for a Mexico visa, what are the requirements?",
                "answer": "Six months valid international passport, passport photograph and work details."
            },
            {
                "question": "If I have a UK, USA Visa can I travel to Mexico?",
                "answer": "Yes, you can."
            },
            {
                "question": "How much does the Mexico visa application cost?",
                "answer": `It costs ₦${feeData?.adult} per Adult for the visa processing, ₦${feeData?.child} per child for the visa processing. Visa fee: $53 it is paid to the embassy.`
            },
            {
                "question": "What does the visa processing cover?",
                "answer": "The visa processing is Aspom’s application fee. It is the cost for filing of client’s application form, reviewing application and giving out advisory services on the application."
            },
            {
                "question": "How long does the processing take?",
                "answer": "It takes 15-21 working days."
            },
            {
                "question": "What if I am not working, can I still apply?",
                "answer": "Yes, you can, provided you have a sponsor."
            },
            {
                "question": "What is the duration of the visa?",
                "answer": "This depends on the consular."
            },
            {
                "question": "Is it compulsory I get invitation before I apply?",
                "answer": "No, invitation doesn’t guarantee a visa."
            },
            {
                "question": "How much should be my closing balance?",
                "answer": "Enough to cover your trip, further guide will be given to you during the process."
            },
            {
                "question": "Is Mexico Visa guaranteed?",
                "answer": "We do not guarantee Visa as Visa issuance is at the discretion of the consular. However, we have 80% success rate."
            },
            {
                "question": "What if I am refused a Visa will there be a refund?",
                "answer": "No, but you can reapply without paying processing fee."
            },
            {
                "question": "After getting my visa, can your company assist with accommodation/Flight?",
                "answer": "Yes, we can."
            },
            {
                "question": "Can I have my baby in Mexico?",
                "answer": "Yes."
            },
            {
                "question": "If I give birth in Mexico, will my child become a citizen?",
                "answer": "Yes."
            },
            {
                "question": "Will I go for an interview?",
                "answer": "Yes, you will be required to go for an interview after submission."
            }
        ]
    },
    // SCHENGEN
    {
        "topic": "Schengen Visa FAQ",
        "img": faq12,
        "faqs": [
            {
                "question": "I want to apply for a Schengen visa, what are the requirements?",
                "answer": "International passport, 5X5 white background passport photograph and Work details i.e., introduction letter, CAC registration certificate if business is registered."
            },
            {
                "question": "How much does the Schengen application cost?",
                "answer": `
                    <b>NB: The processing fee and The Biometric/Insurance fee must be paid together.</b>
                <br/><br/>
                    <b>Booking of biometrics is based on the next available date on the embassy’s website</b>
                    <br/><br/>
                    <b>NB: Greece and Poland Appointment is a Slot Based System. I.e First come first serve Basis</b>
                    <br/><br/>
                    <b>NB: A Schengen Visa can access any of the Schengen Member states.</b>
                    <br/><br/>
                    <b>Document: International Passport, 3 months Bank Statement, Work information such as CAC 
                    if business owner or Employment if employed, and passport photograph.</b>
                    <br/><br/>
                    <b>SPAIN</b><br/><br/>
                    Ans: A) Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: ₦75,400/person (for Spain visa)
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website
                    B)Visa fee is ₦45,000 (Payable at BLS during submission)<br/><br/>
                    <b>DENMARK</b><br/><br/>
                    Ans: A) Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: N45,800
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website
                    B)Visa fee is ₦45,000 (Payable at TLS during submission)<br/><br/>
                    <b>FRANCE/NETHERLAND</b><br/><br/>
                    Ans: A) Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Biometrics and Insurance fee ₦73,400 per person
                    Please note that appointment booking is based on the
                    next available date on the embassy website
                    <br/>
                    B)Visa fee is ₦78,000 (Payable at BLS during submission)<br/><br/>
                    <b>AUSTRIA</b><br/><br/>
                    Ans: A) Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: ₦40,800 Per Person
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website<br/><br/>
                    <b>BELGIUM</b><br/><br/>
                    Ans: A) Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee:  ₦73,000 Per Person
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website<br/>
                    B)Visa fee is ₦72,000 (Payable at TLS during submission)<br/><br/>
                    <b>SWEDEN</b><br/><br/>
                    Ans: Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: ₦45,000 
                    Please note that biometric appointment walk-in<br/>
                    B)Visa fee is ₦45,000 (Payable at BLS during submission)<br/><br/>
                    <b>ITALY</b><br/><br/>
                    Ans: Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: ₦45,800 
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website<br/>
                    B)Visa fee is ₦72,000 (Payable at TLS during submission)<br/><br/>
                    <b>GERMANY</b><br/><br/>
                    Ans: Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: ₦40,000 Per Person
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website<br/>
                    B)Visa fee is ₦72,000 (Payable to the German Embassy during submission)<br/><br/>
                    <b>POLAND</b><br/><br/>
                    Ans: Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: ₦45,800 
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website<br/>
                    B)Visa fee is ₦72,000 (Payable to the Embassy during submission)<br/><br/>
                    <b>GREECE</b><br/><br/>
                    Ans: Processing fee: ₦${feeData?.adult} per adult, and ₦${feeData?.child} per child.
                    Insurance and biometric fee: ₦52,800 
                    Please note that biometric appointment booking is based on the
                    next available date on the embassy website<br/>
                    B)Visa fee is ₦72,000 (Payable to the Embassy during submission)<br/><br/>
                `
            },
            {
                "question": "What does Visa Processing fee mean?",
                "answer": "Visa processing fee covers filling of client’s application form, flight reservation, hotel reservation, and advisory services."
            },
            {
                "question": "How long does the embassy take to process the application?",
                "answer": "It takes about 15 working days after submission. However, processing time may vary based on individual assessments."
            },
            {
                "question": "What if I am not working, can I still apply?",
                "answer": "Yes, you can apply, provided you have a sponsor."
            },
            {
                "question": "What is the duration of the visa?",
                "answer": "Duration depends on the consular; typically, first-time applicants receive visas valid for about 1-3 months."
            },
            {
                "question": "Is it compulsory I get invitation from Schengen before I apply?",
                "answer": "No, invitation doesn’t guarantee a visa."
            },
            {
                "question": "Will you review my documents before I submit?",
                "answer": "Yes, we will guide you through the process."
            },
            {
                "question": "How much should be on my closing balance?",
                "answer": "Enough to cover your trip; further guidance will be provided during the process."
            },
            {
                "question": "I was just refused Visa. Can I reapply?",
                "answer": "Yes, you can reapply without paying the processing fee, but you will need to pay the visa application fee only."
            },
            {
                "question": "If I’m not in Lagos or Abuja, can I still apply through your company?",
                "answer": "Yes, you can apply online or via phone; however, physical submission is in Lagos and Abuja."
            },
            {
                "question": "Is your Visa guaranteed?",
                "answer": "We do not guarantee Visa issuance as it is at the discretion of the consular, but we provide guidance based on our experience."
            },
            {
                "question": "What if I am refused a Visa will there be a refund?",
                "answer": "No refund, but you can reapply without paying the processing fee."
            },
            {
                "question": "Does your company assist with work permit?",
                "answer": "No."
            },
            {
                "question": "Can I travel immediately my visa is granted?",
                "answer": "Yes, you can."
            },
            {
                "question": "Does your company process statement account or work document for client?",
                "answer": "No, we don’t."
            },
            {
                "question": "Where is your office located?",
                "answer": "Lagos."
            },
            {
                "question": "Are you genuine and real?",
                "answer": "Yes, We are."
            },
            {
                "question": "After getting my visa, can your company assist with accommodation/Flight?",
                "answer": "Yes, we can assist."
            },
            {
                "question": "Will it be a single entry or multiple entry class of Visa?",
                "answer": "The number of entries is at the discretion of the consular."
            },
            {
                "question": "How many countries does a Schengen Visa grant me access to?",
                "answer": "A Schengen Visa grants access to 26 countries."
            },
            {
                "question": "Do I need to have travel histories before applying?",
                "answer": "No, you don’t need to have travel histories."
            }
        ]
    }
]