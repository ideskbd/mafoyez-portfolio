export interface ITableColumnData {
    id: number;
    title: string;
}

export interface IAuthReducer {
    isLoading: boolean;
    isSubmitting: boolean;
    otpStatus: boolean;
    otpExpireTime: string;
    loginData: any;
    loginInput: {
        email: string;
        password: string
    }
    otpInput: {
        otp: string;
    }
    resetPasswordInput: {
        email: string;
        password: string;
        confirmPassword: string;
        otp: string;
    }
}

export interface ISelect2Item {
    label: string;
    value: number | string;
}

export interface IProject {
    isLoading: boolean;
    isDeleting: boolean;
    isLoadingDetails: boolean;
    isSubmitting: boolean;
    projectOptionList: any[];
    projectList: any[];
    defaultBanks: any[];
    projectPaginationData: any[];
    projectDetails: any;
    projectInput: {
        name: string;
        code: string;
        default_bank_id: number | null;
        address: string;
    };
    projectDropdownList: Array<ISelect2Item>
}

export interface IBranch {
    isLoading: boolean;
    isDeleting: boolean;
    isLoadingDetails: boolean;
    isSubmitting: boolean;
    branchList: any[];
    branchPaginationData: any[];
    branchDetails: any;
    branchDropdownList: Array<ISelect2Item>
    branchInput: {
        project_id: number | null;
        name: string;
        address: string;
        code: string;
    }
}

export interface IEmployee {
    first_name: string;
    last_name: string;
    email: string;
    designation_id: number;
    role_id: number;
    project_id: number;
    branch_ids: Array<Number>;
    phone: string;
    avatar: string | null;
    password: string;
    confirm_password: string;
}

export interface IEmployeeView extends IEmployee {
    id: number;
    code: string;
    designation_name: string;
    status: string;
    role_name: string;
    bank_name: string;
}

export interface ISellerReportView extends IEmployee {
    id: number;
    code: string;
    proposal: string;
    proposal_count: string;
    total_amount: string;
    status: string;
    role_name: string;
    bank_name: string;
}

export interface IMedicalTestView extends IMedicalTestForm {
    id: number;
    name1: string;
    min_age: number;
    max_age: number;
    min_amount: number;
    max_amount: number;
}

export interface IMedicalForm {
    id: number;
    proposal_no: string;
    status: string;
    is_approve: number;
    is_send_sms: number;
    extra_info_requirement: string;
    further_requirement: number;
}

export interface IMedicalFileForm {
    medical_id: number;
    test_id: number;
    file: string;
}


export interface IMedicalView extends IMedicalForm {
    id: number;
    proposal_no: string;
    status: string;
    extra_info_requirement: string;
    further_requirement: number;
    proposal_id: number;
}
export interface IEmployeeReducer {
    isLoading: boolean;
    isDeleting: boolean;
    isLoadingDetails: boolean;
    isSubmitting: boolean;
    employeeList: any[];
    employeePaginationData: any[];
    employeeDetails: any;
    rolesDropdownList: Array<ISelect2Item>
    agentsDropdownList: Array<ISelect2Item>
    employeeInput: IEmployee
}

export interface IReportReducer {
    isLoading: boolean;
    isDeleting: boolean;
    isLoadingDetails: boolean;
    isSubmitting: boolean;
    reportList: any[];
    reportPaginationData: any[];
    reportDetails: any;
}

export interface IDesignation {
    isLoading: boolean;
    isDeleting: boolean;
    isLoadingDetails: boolean;
    isSubmitting: boolean;
    designationDropdownList: Array<ISelect2Item>
    designationList: any[];
    paginationData: {};
    designationDetails: {};
    designationInput: {
        name: string;
        code: string;
    },
}

export interface IGlobal {
    isOpenSidebar: boolean;
    sideMenuList: any[];
}

export interface IProposalPersonalInformation {
    proposal_nominee_id: number | null;
    full_name: string;
    father_name: string;
    mother_name: string;
    spouse_name: string;
    email: string;
    mobile_no: string;
    marital_status: string;
    identity_type: string;
    gender: string;
    id_no: string;
    dob: string;
    occupation: string;
    relation: string;
    height: number;
    height_inch: number;
    height_unit: string;
    weight: number;
    weight_unit: string;
    allocation: string;
}

export interface IProposalAddress {
    proposal_nominee_id: number | null;
    street_address: string;
    post_office_name: string;
    address_type: 'present' | 'permanent';
    area_id: number;
    area_name: string;
    district_id: number;
    district_name: string;
    division_id: number;
    division_name: string;
    defaultDivision: any,
    defaultDistrict: any,
    defaultArea: any,
    is_same_address: boolean;
}

export interface IProposalPresentAddress extends IProposalAddress {
    address_type: 'present';
}

export interface IProposalPermanentAddress extends IProposalAddress {
    address_type: 'permanent';
}

export interface IProposalBankInformation {
    proposal_nominee_id: number | null;
    bank_name: string;
    bank_branch_name: string;
    bank_account_no: string;
    bank_account_holder_name: string;
}

export interface IProposalGuardian {
    proposal_nominee_id: number | null;
    name: string;
    phone_no: string;
    dob: string;
    id_no: string;
    relation: string;
}

export interface IProposalBasicInput {
    project_id: number;
    branch_id: number;
    proposal_no: string;
    plan_id: number;
    product_id: number;
    agent_id: number;
    initial_sum_assured: number;
    initial_premium: number;
    proposer_name: '',
    phone_no: '',
    proposal_personal_information: IProposalPersonalInformation | {};
    proposer_present_address: IProposalPresentAddress | {};
    proposer_permanent_address: IProposalPermanentAddress | {};
    proposer_bank_information: IProposalBankInformation | {};
    proposer_guardian: IProposalGuardian | {};
    proposer_nominees: any[];
    underwriting_questionnaires: any[];
    status: string;
    basic_premium: number;
    total_premium: number;
    sum_at_risk: number;
    total_sum_at_risk: number;
    term: number;
    policy_issue_date: string;
    commencement_date: string;
    risk_date: string;
    mode: string;
    cleared_rider_selections: boolean;
    rider_selection: string;
    rider_class: string;
    rider_adnd: number;
    rider_adb: number;
    rider_hi: number;
    rider_ci: number;
    sum_assured: number;
    rider_premium: number;
    rider_sum_assured: number;
    occupation_extra: number;
    extra_mortality: number;
    product_rate: number;
}

export interface IProposalView extends IProposalBasicInput {
    id: number;
    project_name: string;
    branch_name: string;
    plan_name: string;
    agent_name: string;
}

export interface IProposal {
    isDeleting: boolean;
    isSubmitting: boolean;
    planDropdownList: any[];

    proposalsList: any[];
    isLoading: boolean;
    paginationData: any[];

    concurrentProposalsList: any[];
    isConcurrentListLoading: boolean;
    concurrentPaginationData: any[];

    previousPoliciesList: any[];
    isPreviousPolicListLoading: boolean;
    previousPaginationData: any[];

    loadingDetails: boolean;
    isSameAddress: boolean;
    isNomineeSameAddress: boolean;
    proposalDetails: any;
    proposalInput: IProposalBasicInput;
    printProposalList: Array<IProposalBasicInput>,
    identity_type: {
        isDisabledField: boolean;
        label: string;
        message: string;
        value: string;
        minLength: number,
        maxLength: number,
    };
    productDetails: any;
}

export interface IRole {
    isLoading: boolean;
    isDeleting: boolean;
    isSubmitting: boolean;
    roleList: any[];
    rolesListPaginated: any[];
    isRoleCreated: boolean,
    inputData: {
        id: number | string;
        role: string,
        sum_assured_limit: number;
        is_head_office: boolean;
        isLoading: boolean,
        groupList: []
    },
}

export interface IStampForm {
    proposal_id: number;
    project_id: number;
    branch_id: number;
    proposal_no: string;
    qty_100: number;
    qty_50: number;
    qty_30: number;
    qty_20: number;
    qty_10: number;
    qty_5: number;
    is_duplicate: boolean;
    stamp_used: number;
    stamp_used_amounnt: number;
    balance: number;
    schedule_date: string;
    business_date: string;
    remarks: string;
}

export interface IStampReducer {
    isLoading: boolean;
    stampList: any[];
    stampPaginationData: any[];
    isSubmitting: boolean;
    isSearching: boolean;
    stampForm: IStampForm;
}

export interface IUnderwritingRequirement {
    id: number
    code: string;
    requirement_name_en: string;
    requirement_name_bn: string;
    type_id: number
    input_type: string;
    value: any;
}

export interface IUnderwritingType {
    id: number;
    name_en: string;
    name_bn: string;
    code: string;
    priority: number;
    requirements: Array<IUnderwritingRequirement>
}

export interface IUnderwriting {
    proposal_id: number;
    status: string;
    em_life: number;
    em_hi: number;
    em_ci: number;
    em_pdab: number;
    em_diab: number;
    total_em: number;
    total_premium: number;
    accepted_standard_rate_for: object;
    types: Array<IUnderwritingType>
}

export interface IUnderwritingView extends IUnderwriting {
    initial_sum_assured: number;
}

export interface IStamp {
    name: string;
    value: number;
}

export interface IStamps {
    stamps: Array<IStamp>;
}

export interface IStampListItem extends IStamps {
    id: number;
    challan_no: number;
    qty_100: number;
    qty_50: number;
    qty_30: number;
    qty_20: number;
    qty_10: number;
    qty_5: number;
    total: number;
    purchase_date: any;
    receive_date: any;
    project_id: number;
    branch_id: number;
    created_at: any;
}

export interface IExpenseInput {
    expense_type_id: number;
    name: string;
    items: any[],
}

export interface IExpense {
    isLoading: boolean;
    isSubmitting: boolean;
    loadingDetails: boolean;
    isDeleting: boolean;
    expensesList: any[];
    paginationData: any[];
    expenseDetails: any;
    expenseInput: IExpenseInput,
    expenseTypeDropdownList: any[];
}
export interface IProposalFormSection {
    onChangeText: (name: string, value: any) => void;
    errors?: any;
    sectionName?: string | null;
    divisionList: any;
    cityList: any;
    areaList: any;
}

export interface IProductRate {
    age: number;
    term: number;
    rate: number;
}
export interface IProductForm {
    name: string;
    rates: Array<IProductRate>;
    modes: Array<string>;
    is_dps: number;
    is_adb_enabled: number,
    is_child_health: number,
}

export interface IProductReducer {
    isLoading: boolean;
    isSubmitting: boolean;
    loadingDetails: boolean;
    isDeleting: boolean;
    productList: any[];
    paginationData: any[];
    productDetails: any;
    productDropdownList: Array<ISelect2Item>
    productInput: IProductForm
}

export interface IMedicalTestForm {
    name: string;
    min_age: number;
    max_age: number;
    min_amount: number;
    max_amount: number;
}
export interface IMedicalTestReducer {
    isLoading: boolean;
    isSubmitting: boolean;
    loadingDetails: boolean;
    isDeleting: boolean;
    medicalTestList: any[];
    medicalTestPaginationData: any[];
    medicalTestDetails: any;
    medicalDetails: any;
    medicalTestInput: IMedicalTestForm
}

export interface IMedicalReducer {
    isLoading: boolean;
    showMedicalTestList: boolean;
    isSubmitting: boolean;
    loadingDetails: boolean;
    isDeleting: boolean;
    medicalList: any[];
    medicalTestList: any[];
    medicalPaginationData: any[];
    medicalDetails: any;
    medicalInput: IMedicalForm
    medicalFileInput: IMedicalFileForm
    underwriting_questionnaires: any;
}

export interface IStampStockForm {
    project_id: number;
    branch_id: number;
    challan_no: string;
    qty_100: number;
    qty_50: number;
    qty_30: number;
    qty_20: number;
    qty_10: number;
    qty_5: number;
    purchase_date: string;
    receive_date: string;
}

export interface IStampStockAllotmentForm {
    employee_id: number;
    qty_100: number;
    qty_50: number;
    qty_30: number;
    qty_20: number;
    qty_10: number;
    qty_5: number;
}

export interface IStampBalace {
    qty_100: number;
    qty_50: number;
    qty_30: number;
    qty_20: number;
    qty_10: number;
    qty_5: number;
}

export interface IStampStock {
    isLoading: boolean;
    isSubmitting: boolean;
    isLoadingDetails: boolean;
    isDeleting: boolean;
    stampStockList: any[];
    stampStockPaginationData: any[];
    stampStockDetails: any;
    stampStockForm: IStampStockForm,
    isLoadingBalance: boolean;
    stampBalance: IStampBalace;
}

export interface IOccupation {
    id: number;
    name: string;
    class: string;
    group: string;
}

export interface IOccupationReducer {
    occupations: Array<IOccupation>
    occupationDropdownList: Array<ISelect2Item>
    isLoading: boolean;
    isDeleting: boolean;
    isLoadingDetails: boolean;
    isSubmitting: boolean;
    occupationList: any[];
    occupationPaginationData: any;
    occupationDetails: any;
    occupationInput: {
        name: string;
        group: string;
        class: string;
    }
}

export interface IDivisionReducer {
    isLoading: boolean;
    divisions: Array<ISelect2Item>;
}

export interface ICityReducer {
    isLoading: boolean;
    cities: Array<ISelect2Item>;
    nomineeDefaultCities: Array<ISelect2Item>;
}

export interface IAreaReducer {
    isLoading: boolean;
    areas: Array<ISelect2Item>;
    nomineeDefaultAreas: Array<ISelect2Item>;
}

interface IPaymentInput {
    proposal_no: string;
    proposal_id: number | null;
    proposal: object | null;
    payment_media: 'online' | 'manual';
    amount: number;
    type: string | null;
    attachment: any;
}

export interface IPaymentReducer {
    isLoading: boolean;
    isSearching: boolean;
    isSubmitting: boolean;
    paymentInput: IPaymentInput;
    paymentList: any[];
    paymentPaginationData: any[];
}


export interface IUnderwritingQues {
    isLoading: boolean;
    isDeleting: boolean;
    isLoadingDetails: boolean;
    isSubmitting: boolean;
    underwritingQuesList: any[];
    underwritingQuesPaginationData: any[];
    underwritingQuesDetails: any;
    underwritingQuesInput: {
        requirement_name_en: string;
        requirement_name_bn: string;
        code: string;
        type_id: number | null;
        input_type: string;
        gender: string;
    };
}