import { type PepCategory } from "./DefinitionCard";

export const foreignPepsData: PepCategory[] = [
  {
    id: "foreign-peps",
    title: "Foreign PEPs",
    description:
      "Individuals who are or have been entrusted with prominent public functions by a foreign country; for example heads of states or of government, senior politicians, senior judicial or military officials, senior executives of state owned corporations, important political party officials.",
    countries: [
      {
        country: "Indonesia",
        content: (
          <>
            <p>
              Individuals entrusted with a prominent public function by a
              foreign state. This includes foreign heads of state or government,
              senior politicians, senior government officials, senior military
              or law-enforcement officials, senior executives of foreign
              state-owned enterprises, and senior officials of foreign political
              parties. Bank Indonesia and the Ministry of Finance also
              recognized foreign PEPs as high-risk persons requiring EDD.
            </p>
            <p className="mt-3">Defined by OJK (POJK 8/2023; SEOJK 11/2021)</p>
          </>
        ),
      },
      {
        country: "Malaysia",
        content: (
          <>
            <p>
              Individuals who are or who have been entrusted with prominent
              public functions by a foreign country.
            </p>
            <p className="mt-3">
              For example, Heads of State Government, senior politicians, senior
              government, judicial or military officials, senior executives of
              state-owned corporations and important political party officials;{" "}
              <a
                className="font-bold text-orange-01"
                href="https://amlcft.bnm.gov.my/documents/6312201/6321409/AMLCFT+and+Targeted+Financial+Sanctions+for+Financial+Institutions+%28AML_CFT+and+TFS+for+FIs%29.pdf/bea5d16c-ac8d-62ac-e755-91223e236c51?t=1646233875584"
                target="_blank"
              >
                (BNM)
              </a>
            </p>
            <p className="mt-3">
              State-owned corporations not clearly defined.
            </p>
          </>
        ),
      },
      {
        country: "Thailand",
        content: (
          <>
            <p>Foreign Politically Exposed Persons (Foreign PEPs) include:</p>
            <ol className="list-decimal pl-5 mt-2 space-y-1">
              <li>Heads of State</li>
              <li>Governments</li>
              <li>Ministers</li>
              <li>Senior government officials</li>
              <li>Courts</li>
              <li>Independent agencies</li>
              <li>Public prosecutors</li>
              <li>Military personnel</li>
              <li>
                Individuals holding senior positions in business entities owned
                by the government or other state authorities
              </li>
              <li>Individuals with significant roles in political parties</li>
            </ol>
            <p className="mt-3">
              All of the above shall be regarded as Politically Exposed Persons
              (PEPs) if their positions are equivalent to those of Domestic PEPs
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "domestic-peps",
    title: "Domestic PEPs",
    description:
      "individuals who are or have been entrusted domestically with prominent public functions; for example,  heads of state  or of government, senior politicians, senior government, judicial or military officials, senior executives of state owned corporations, important political party officials.",
    countries: [
      {
        country: "Indonesia",
        content: (
          <>
            <p>
              Individuals entrusted with domestic public authority or prominent
              public functions, including state officials (president,
              vice-president, ministers, DPR/DPD/DPRD members, Supreme
              Court/Constitutional Court judges, prosecutors, senior law
              enforcement), senior bureaucrats (echelon I-II), strategic
              officials, SOE/BUMD executives, licensing officials, regional
              heads, political party officials, senior military/police,
              LHKPN-obligated officials, and any individuals exercising
              strategic public roles.
            </p>
            <p className="mt-3 ">
              Defined in BI Regulation PBI 12/20/2010, OJK POJK 8/2023, SEOJK
              11/2021, PPATK PER-02/2015 & PER-11/2020, and PMK 30/2010
            </p>
          </>
        ),
      },
      {
        country: "Malaysia",
        content: (
          <>
            <p>
              Individuals who are or have been entrusted domestically with
              prominent public functions. For example, Heads of State or
              Government, senior politicians, senior government (includes
              federal, state and local government), judicial or military
              officials, senior executives of state-owned corporations and
              important political party officials;
              <a
                className="font-bold text-orange-01"
                href="https://amlcft.bnm.gov.my/documents/6312201/6321409/AMLCFT+and+Targeted+Financial+Sanctions+for+Financial+Institutions+%28AML_CFT+and+TFS+for+FIs%29.pdf/bea5d16c-ac8d-62ac-e755-91223e236c51?t=1646233875584"
                target="_blank"
              >
                (BNM)
              </a>
            </p>

            <p className="mt-3">
              State-owned corporations not clearly defined.
            </p>
          </>
        ),
      },
      {
        country: "Thailand",
        content: (
          <>
            <p className="">
              1. A person holding a high-ranking position with significant
              authority in the legislative, executive, or judiciary branches.
            </p>
            <p className="mt-3">
              2. A person in a high-ranking position with key control and
              management authority in central government agencies, local
              government agencies, state enterprises, or other state-owned
              organizations.
            </p>
            <p className="mt-3">
              3. A person holding a senior command position in the military or
              police force.
            </p>
            <p className="mt-3">
              4. A person holding a senior or board member position in a
              constitutional organization.
            </p>
            <p className="mt-3">
              In Thailand, a politically exposed person also includes
              individuals meeting the above criteria who have vacated their
              positions within the past year or who continue to hold influence
              related to the position, even if they left office more than one
              year ago.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "international-organization-peps",
    title: "International organization PEPs",
    description:
      "persons who are or have been entrusted with a prominent function by an international organization, refers to members of senior management or individuals who have been entrusted with equivalent functions, i.e. directors, deputy directors and members of the board or equivalent functions.",
    countries: [
      {
        country: "Indonesia",
        content: (
          <>
            <p>
              Individuals entrusted with prominent functions within
              international organizations. This includes directors, deputy
              directors, senior managers, and board members at institutions such
              as the IMF, World Bank, UN, OECD, ADB, IDB, and similar bodies.
            </p>
            <p className="mt-3">Defined by OJK (POJK 8/2023; SEOJK 11/2021)</p>
          </>
        ),
      },
      {
        country: "Malaysia",
        content: (
          <>
            <span className="inline-block">
              <p className="font-bold">
                Persons who are or have been entrusted with a prominent function
              </p>
              by an international organization which refers to members of senior
              management. For example, directors, deputy directors and members
              of the Board or equivalent functions.
            </span>
            <p className="mt-3">
              The definition of PEPs is not intended to cover middle ranking or
              more junior individuals in the foregoing categories.{" "}
              <a
                className="font-bold text-orange-01"
                href="https://amlcft.bnm.gov.my/documents/6312201/6321409/AMLCFT+and+Targeted+Financial+Sanctions+for+Financial+Institutions+%28AML_CFT+and+TFS+for+FIs%29.pdf/bea5d16c-ac8d-62ac-e755-91223e236c51?t=1646233875584"
                target="_blank"
              >
                (BNM)
              </a>
            </p>
          </>
        ),
      },
      {
        country: "Thailand",
        content: (
          <p>
            Individuals holding senior management positions in international
            organizations
          </p>
        ),
      },
    ],
  },
  {
    id: "family-members",
    title: "Family members",
    description:
      "are individuals who are related to a PEP either directly (consanguinity) or through marriage or similar (civil) forms of partnership.",
    countries: [
      {
        country: "Indonesia",
        content: (
          <>
            <p>
              Family members up to the second degree, vertically and
              horizontally. Includes: parents, siblings, children, grandparents,
              grandchildren, parents-in-law, spouses, in-laws, spouses of
              children/grandchildren, siblings-in-law, and other publicly
              recognized close family connections.
            </p>
            <p className="mt-3 ">
              Defined by OJK (POJK 8/2023), SEOJK 11/2021, and PPATK
              PER-11/2020:
            </p>
          </>
        ),
      },
      {
        country: "Malaysia",
        content: (
          <>
            <p>
              Refers to individuals who are related to a PEP either directly
              (consanguinity) or through marriage. A family member in this
              context, includes:
            </p>
            <ol className="list-[lower-alpha] pl-5 mt-2 space-y-1">
              <li>parent;</li>
              <li>sibling;</li>
              <li>spouse;</li>
              <li>child; or</li>
              <li>
                spouse's parent, for both biological or non-biological
                relationships.
              </li>
            </ol>
            <p className="mt-3">
              <a
                className="font-bold text-orange-01"
                href="https://amlcft.bnm.gov.my/documents/6312201/6321409/AMLCFT+and+Targeted+Financial+Sanctions+for+Financial+Institutions+%28AML_CFT+and+TFS+for+FIs%29.pdf/bea5d16c-ac8d-62ac-e755-91223e236c51?t=1646233875584"
                target="_blank"
              >
                (BNM)
              </a>
            </p>
          </>
        ),
      },
      {
        country: "Thailand",
        content: (
          <>
            <p>
              Father, mother, children, adopted children, or adoptees of a
              politically exposed person.
            </p>
            <p className="mt-3">
              Siblings who share the same father and mother, or those who share
              either parent with a politically exposed person.
            </p>
            <p className="mt-3">
              Spouse or domestic partner (living together as husband and wife
              without official marriage registration) of a politically exposed
              person.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "close-associates",
    title: "Close associates",
    description:
      "are individuals who are closely connected to a PEP, either socially or professionally.",
    countries: [
      {
        country: "Indonesia",
        content: (
          <>
            <p>
              Persons closely connected to PEPs, including companies
              owned/managed/controlled by PEPs, individuals publicly known to
              have close personal or business ties with the PEP (drivers,
              personal assistants, private secretaries, aides, consultants,
              advisors), long-term business partners, nominee shareholders, and
              entities indirectly controlled by PEPs.
            </p>
            <p className="mt-3 ">
              Defined by OJK (POJK 8/2023), SEOJK 11/2021, and PPATK PER-11/2020
            </p>
          </>
        ),
      },
      {
        country: "Malaysia",
        content: (
          <>
            <p>
              Refers to any individual closely connected to a politically
              exposed person (PEP), either socially or professionally.
            </p>
            <p className="mt-3">A close associate in this context includes:</p>
            <ol className="list-[lower-alpha] pl-5 mt-2 space-y-1">
              <li>
                extended family members, such as relatives (biological and
                non-biological relationship);
              </li>
              <li>
                financially dependent individuals (e.g. persons salaried by the
                PEP such as drivers, bodyguards, secretaries);
              </li>
              <li>
                business partners or associates of the PEP;{" "}
                <a
                  className="font-bold text-orange-01"
                  href="https://amlcft.bnm.gov.my/documents/6312201/6321409/AMLCFT+and+Targeted+Financial+Sanctions+for+Financial+Institutions+%28AML_CFT+and+TFS+for+FIs%29.pdf/bea5d16c-ac8d-62ac-e755-91223e236c51?t=1646233875584"
                  target="_blank"
                >
                  (BNM)
                </a>{" "}
                and{" "}
                <a
                  className="font-bold text-orange-01"
                  href="https://www.ssm.com.my/Pages/Legal_Framework/Companies%20-Act%20-1965-(Repealed)/aktabi_20160915_companiesact2016act777_0.pdf"
                  target="_blank"
                >
                  (Companies Act)
                </a>
              </li>
              <li>prominent members of the same organization as the PEP;</li>
              <li>
                individuals working closely with the PEP (e.g. work colleagues);
                or
              </li>
              <li>close friends.</li>
            </ol>
            <p className="mt-3">
              Beneficial Ownership Interests and Control statements can help
              further identify additional close associates through disclosure of
              beneficial ownership and state owned companies and subsidiaries.
            </p>
          </>
        ),
      },
      {
        country: "Thailand",
        content: (
          <>
            <p>Close associates include:</p>

            <ol className="list-[lower-alpha] pl-5 mt-2 space-y-1">
              <li>
                Individuals entrusted with the possession or management of
                assets or other benefits.
              </li>
              <li>
                Individuals with a close relationship due to the establishment
                or conduct of a business relationship.
              </li>
            </ol>
          </>
        ),
      },
    ],
  },
];

export const dataStandard: {
  id: string;
  title: string;
  description: string;
  tableColumns: { name: string; type: string; description: string }[];
}[] = [
  {
    id: "person",
    title: "Person",
    description:
      "Describe the person who qualified as PEPS as defined in the previous section.",
    tableColumns: [
      {
        name: "id",
        type: "Text",
        description: "Unique identifier",
      },
      {
        name: "name",
        type: "Text",
        description: "A person's preferred full name",
      },
      {
        name: "other_name",
        type: "List of text",
        description: "An alternate name, such as a pseudonym",
      },
      {
        name: "email",
        type: "Text",
        description: "A preferred email address",
      },
      {
        name: "gender",
        type: "Text",
        description: "A gender",
      },
      {
        name: "birth_date",
        type: "Date",
        description: "A date of birth",
      },
      {
        name: "death_date",
        type: "Date",
        description: "A date of death",
      },
      {
        name: "image",
        type: "Text",
        description: "A URL of a head shot",
      },
      {
        name: "summary",
        type: "Text",
        description: "A one-line account of a person's life",
      },
      {
        name: "biography",
        type: "Text",
        description: "An extended account of a person's life",
      },
      {
        name: "national_identity",
        type: "Text",
        description: "A national identity",
      },
      {
        name: "contact_details",
        type: "List of text",
        description: "A means of contacting the person",
      },
      {
        name: "links",
        type: "List of text",
        description: "A URL to a document about the person",
      },
    ],
  },
  {
    id: "organization",
    title: "Organization",
    description:
      "Describe any kind of related organization: government body, private organization, etc.",
    tableColumns: [
      {
        name: "id",
        type: "Text",
        description: "Unique identifier",
      },
      {
        name: "name",
        type: "Text",
        description: "A primary name, e.g. a legally recognized name",
      },
      {
        name: "other_name",
        type: "List of text",
        description: "An alternate name, e.g. a trading or colloquial name",
      },
      {
        name: "parent_id",
        type: "Text",
        description:
          "The id of the organization that contains this organization",
      },
      {
        name: "classification",
        type: "Text",
        description:
          "An organizational category, e.g. charity, committee, etc.",
      },
      {
        name: "founding_date",
        type: "Date",
        description: "A date of founding",
      },
      {
        name: "dissolution_date",
        type: "Date",
        description: "A date of dissolution, termination, expiry, etc.",
      },
      {
        name: "image",
        type: "Text",
        description: "A URL of a head shot",
      },
      {
        name: "contact_details",
        type: "List of text",
        description: "A means of contacting the organization",
      },
      {
        name: "links",
        type: "List of text",
        description: "A URL to a document about the organization",
      },
    ],
  },
  {
    id: "post",
    title: "Post",
    description:
      "Describe the position of each organization. This table should have the following columns:",
    tableColumns: [
      {
        name: "id",
        type: "Text",
        description: "Unique identifier",
      },
      {
        name: "label",
        type: "Text",
        description: "A label describing the post",
      },
      {
        name: "other_labels",
        type: "Text",
        description: "An alternate label, such as an abbreviation",
      },
      {
        name: "role",
        type: "Text",
        description: "The function that the holder of the post fulfills",
      },
      {
        name: "organization_id",
        type: "Text",
        description: "The organization in which the post is held",
      },
      {
        name: "start_date",
        type: "Date",
        description: "A date of creation",
      },
      {
        name: "end_date",
        type: "Date",
        description: "A date of elimination",
      },
      {
        name: "contact_details",
        type: "List of text",
        description: "A means of contacting the holder of the post",
      },
      {
        name: "links",
        type: "List of text",
        description: "A URL to a document about the post",
      },
    ],
  },
  {
    id: "membership",
    title: "Membership",
    description:
      "Connect the person to the position in a membership relationship.",
    tableColumns: [
      {
        name: "id",
        type: "Text",
        description: "Unique identifier",
      },
      {
        name: "label",
        type: "Text",
        description: "A label describing the membership",
      },
      {
        name: "role",
        type: "Text",
        description: "The role that the member fulfills in the organization",
      },
      {
        name: "person_id",
        type: "Text",
        description:
          "The ID of the person that is a member of the organization",
      },
      {
        name: "organization_id",
        type: "Text",
        description:
          "The ID of the organization in which the person is a member",
      },
      {
        name: "post_id",
        type: "Text",
        description:
          "The ID of the post held by the member in the organization",
      },
      {
        name: "start_date",
        type: "Date",
        description: "The date on which the membership began",
      },
      {
        name: "end_date",
        type: "Date",
        description: "The date on which the membership ended",
      },
      {
        name: "contact_details",
        type: "List of text",
        description: "A means of contacting the member of the organization",
      },
      {
        name: "links",
        type: "List of text",
        description: "A URL to a document about the membership",
      },
    ],
  },
  {
    id: "relationship",
    title: "Relationship",
    description:
      "Describe the relation between two people that would make a person become PEPS as described in the previous section.",
    tableColumns: [
      {
        name: "id",
        type: "Text",
        description: "Unique identifier",
      },
      {
        name: "type",
        type: "Text",
        description: "A type of the relationship",
      },
      {
        name: "subject_id",
        type: "Text",
        description: "The subject person’s id",
      },
      {
        name: "object_id",
        type: "Text",
        description: "The object person’s id",
      },
      {
        name: "start_date",
        type: "Date",
        description: "The date on which the relationship began",
      },
      {
        name: "end_date",
        type: "Date",
        description: "The date on which the relationship ended",
      },
    ],
  },
];

export const referencePepsData: PepCategory[] = [
  {
    id: "foreign-peps",
    title: "Foreign PEPs",
    description:
      "Individuals who are or have been entrusted with prominent public functions by a foreign country; for example heads of states or of government, senior politicians, senior judicial or military officials, senior executives of state owned corporations, important political party officials.",
    countries: [
      {
        country: "Indonesia",
        content: (
          <>
            <p>
              Despite being assessed as “largely compliant” in the{" "}
              <a
                href="https://www.fatf-gafi.org/en/publications/Mutualevaluations/Indonesia-fur-2025.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01 underline"
              >
                2025 FATF Mutual Evaluation Follow-Up Report
              </a>
              , Indonesia continues to face a critical structural weakness in
              its anti–money laundering and integrity systems, which is the
              absence of a single, authoritative, and comprehensive source of
              Politically Exposed Persons (PEP) data. This weakness persists
              even though clear regulatory definitions exist across{" "}
              <a
                href="https://ojk.go.id/id/regulasi/Documents/Pages/POJK-APU-PPT-dan-PPPSPM-di-SJK/POJK%208%20TAHUN%202023%20-%20PENERAPAN%20PROGRAM%20APU%20PPT%20DAN%20PPSPM%20DI%20SJK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01 underline"
              >
                OJK
              </a>
              (Indonesia Financial Services Authority),{" "}
              <a
                href="https://ppid.ppatk.go.id/wp-content/uploads/2025/07/Peraturan-PPATK-Nomor-11-Tahun-2020-Tentang-Tata-Cara-Pemanfaatan-Aplikasi-Politically-Exposed-Person.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01 underline"
              >
                PPATK
              </a>{" "}
              (Indonesia’s Financial Intelligence Unit),{" "}
              <a
                href="https://www.bi.go.id/id/publikasi/peraturan/Pages/pbi_122010.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01"
              >
                Bank Indonesia
              </a>{" "}
              (Central Bank of Indonesia), and the{" "}
              <a
                href="https://jdih-old.kemenkeu.go.id/in/dokumen/peraturan/2248e46c-7d1a-4f3a-8770-4a46b5f451cf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01 underline"
              >
                Ministry of Finance
              </a>
              . In practice, the country does not yet possess a unified national
              PEP registry that consolidates all relevant categories of PEPs as
              envisaged by FATF.
            </p>
            <p className="mt-3">
              This operational definition is drawn from Indonesian laws and
              regulations, notably Bank Indonesia Regulation{" "}
              <a
                href="https://www.bi.go.id/id/publikasi/peraturan/Pages/pbi_122010.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01"
              >
                (PBI 12/20/2010)
              </a>
              , OJK regulations and guidance{" "}
              <a
                href="https://ojk.go.id/apu-ppt/id/peraturan/seojk/Pages/seojk-11-2021.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                (SEOJK 11/2021
              </a>
              ;
              <a
                href="https://ojk.go.id/id/regulasi/Documents/Pages/POJK-APU-PPT-dan-PPPSPM-di-SJK/POJK%208%20TAHUN%202023%20-%20PENERAPAN%20PROGRAM%20APU%20PPT%20DAN%20PPSPM%20DI%20SJK.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                POJK No. 8/2023)
              </a>
              ,
              <a
                href="https://ppid.ppatk.go.id/wp-content/uploads/2025/07/Peraturan-PPATK-Nomor-11-Tahun-2020-Tentang-Tata-Cara-Pemanfaatan-Aplikasi-Politically-Exposed-Person.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                PPATK
              </a>
              regulations, and Ministry of Finance rules{" "}
              <a
                href="https://jdih-old.kemenkeu.go.id/in/dokumen/peraturan/2248e46c-7d1a-4f3a-8770-4a46b5f451cf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                (PMK 30/2010)
              </a>
            </p>
          </>
        ),
      },
      {
        country: "Malaysia",
        content: (
          <>
            <p>
              Malaysia’s central bank and financial regulatory body, Bank Negara
              Malaysia provides guidance on customer due diligence (CDD) on PEPs
              through the policy documents such as{" "}
              <a
                href="https://amlcft.bnm.gov.my/documents/6312201/6321409/AMLCFT+and+Targeted+Financial+Sanctions+for+Financial+Institutions+%28AML_CFT+and+TFS+for+FIs%29.pdf/bea5d16c-ac8d-62ac-e755-91223e236c51?t=1646233875584"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01 underline"
              >
                Anti-Money Laundering,Countering Financing of Terrorism and
                Targeted Financial Sanctions for Financial Institutions (AML/CFT
                and TFS for FIs)
              </a>
              . Additionally, close business associates are also defined in the
              Companies Act 2016.
            </p>
          </>
        ),
      },
      {
        country: "Thailand",
        content: (
          <>
            <p>
              The definitions were based on Anti-Money Laundering Office
              (AMLO)’s{" "}
              <a
                href="https://sed.amlo.go.th/uploads/menu/attach_202603110835_69b0c6f9521c6.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-01 underline"
              >
                Guidline on Political Exposed Persons
              </a>
            </p>

            <p className="mt-3">
              The Association of Thai Securities Companies use the National
              Anti-Corruption Commission (NACC) Position list for asset
              declaration as a reference to identify PEPs
            </p>
          </>
        ),
      },
    ],
  },
];
