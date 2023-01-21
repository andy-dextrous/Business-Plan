export const data = [
  {
    name: "business_overview",
    title: "Business Overview",
    description: "Tell us about your business",
    fields: [
      {
        name: "business_name",
        label: "Business Name",
        fieldType: "text",
        type: "text-input",
        hidden: false,
        required: true,
        placeholder: "What is the name of your business?",
        options: [],
        selectedOptions: [],
        defaultValue: "",
        description: "",
        hideInSideBar: false,
        handle: "Business Name",
        value: "",
      },
      {
        name: "business_type",
        label: "Industry",
        fieldType: "select",
        type: "select",
        hidden: false,
        required: true,
        placeholder: "Select industry classification for your company",
        options: [
          {
            label: "Product",
            value: "Product",
            displayOrder: -1,
            doubleData: 0,
            hidden: false,
            description: "",
            readOnly: false,
          },
          {
            label: "Service",
            value: "Service",
            displayOrder: -1,
            doubleData: 0,
            hidden: false,
            description: "",
            readOnly: false,
          },
          {
            label: "Both",
            value: "Both",
            displayOrder: -1,
            doubleData: 0,
            hidden: false,
            description: "",
            readOnly: false,
          },
          {
            label: "Mobile App",
            value: "Mobile App",
            displayOrder: -1,
            doubleData: 0,
            hidden: false,
            description: "",
            readOnly: false,
          },

          {
            label: "SaaS  ",
            value: "SaaS",
            displayOrder: -1,
            doubleData: 0,
            hidden: false,
            description: "",
            readOnly: false,
          },
          {
            label: "Other",
            value: "Other",
            displayOrder: -1,
            doubleData: 0,
            hidden: false,
            description: "",
            readOnly: false,
          },
        ],
        selectedOptions: [],
        defaultValue: "",
        description: "",
        hideInSideBar: false,
        handle: "Industry",
        value: "",
      },
      {
        name: "business_summary",
        label: "Business Sumary",
        fieldType: "text",
        type: "textarea",
        hidden: false,
        required: true,
        placeholder: "Tell us a bit about your business",
        options: [],
        selectedOptions: [],
        defaultValue: "",
        description: "",
        hideInSideBar: false,
        handle: "Business Name",
        value: "",
      },
    ],
  },
]
