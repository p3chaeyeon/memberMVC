// projectJSP/src/main/webapp/js/member.js

// id 중복검사; focusout 이벤트가 발생할 때 중복 체크 실행
$('#id').focusout(function() {
    let id = $('#id').val().trim();
    let idDiv = $('#idDiv');

    // 빈 값일 경우 메시지 표시
    if (id === "") {
        idDiv.html("아이디를 먼저 입력하세요").show();
        return;
    }

    $.ajax({
        type: 'GET',
        url: './checkId.do',
        data: { id: id },
        success: function(data) {
            // 서버로부터의 응답에 따라 처리
            console.log(data); // 응답 값 확인을 위해 로그 출력
            if (data.trim() === 'non_exist') {
				idDiv.html('사용 가능한 아이디입니다.').css('color', 'green');
                $('#check').val(id); // 중복 체크 성공 시, 숨겨진 필드에 아이디 저장
            } else {
                idDiv.html('이미 사용 중인 아이디입니다.');
                $('#check').val(''); // 중복 체크 실패 시, 숨겨진 필드 초기화
            }
            idDiv.show();
        },
        error: function() {
			console.log(e);
            idDiv.html('아이디 중복 체크 중 오류가 발생했습니다.').show();
        }
    });
});

// 회원가입 폼(memberWriteForm) 유효성 검사
function memberWrite() {
    let name = document.getElementById("name").value.trim();
    let id = document.getElementById("id").value.trim();
    let check = document.getElementById("check").value.trim();
    let pwd = document.getElementById("pwd").value.trim();
    let repwd = document.getElementById("repwd").value.trim();
    let isValid = true;

    // 오류 메시지 초기화
    document.getElementById("nameDiv").innerHTML = "";
    document.getElementById("idDiv").innerHTML = "";
    document.getElementById("pwdDiv").innerHTML = "";
    document.getElementById("repwdDiv").innerHTML = "";

    // 유효성 검사
    if (name === "") {
        document.getElementById("nameDiv").innerHTML = "이름을 입력하세요";
        document.getElementById("nameDiv").style.display = "block";
        isValid = false;
    }

    if (id === "") {
        document.getElementById("idDiv").innerHTML = "아이디를 입력하세요";
        document.getElementById("idDiv").style.display = "block";
        isValid = false;
    }

    if (pwd === "") {
        document.getElementById("pwdDiv").innerHTML = "비밀번호를 입력하세요";
        document.getElementById("pwdDiv").style.display = "block";
        isValid = false;
    }

    if (pwd !== repwd) {
        document.getElementById("repwdDiv").innerHTML = "비밀번호가 일치하지 않습니다";
        document.getElementById("repwdDiv").style.display = "block";
        isValid = false;
    }

    if (id !== check) {
        alert("아이디 중복 검사를 하세요");
        isValid = false;
    }

    // 유효성 검사가 실패한 경우 폼 제출 중지
    if (!isValid) {
        return false;
    }

    // 유효성 검사가 성공하면 폼 제출
    return true;
}

// 회원정보수정 폼(memberUpdateForm) 유효성 검사
function memberUpdate() {
    let name = document.getElementById("name").value.trim();
	let id = document.getElementById("id").value.trim();
    let pwd = document.getElementById("pwd").value.trim();
    let repwd = document.getElementById("repwd").value.trim();
    let isValid = true;

    // 오류 메시지 초기화
    document.getElementById("nameDiv").innerHTML = "";
	document.getElementById("idDiv").innerHTML = "";
    document.getElementById("pwdDiv").innerHTML = "";
    document.getElementById("repwdDiv").innerHTML = "";

    // 유효성 검사
    if (name === "") {
        document.getElementById("nameDiv").innerHTML = "이름을 입력하세요";
        document.getElementById("nameDiv").style.display = "block";
        isValid = false;
    }
	
	if (id === "") {
	    document.getElementById("idDiv").innerHTML = "아이디를 입력하세요";
	    document.getElementById("idDiv").style.display = "block";
	    isValid = false;
	}
	
    if (pwd === "") {
        document.getElementById("pwdDiv").innerHTML = "비밀번호를 입력하세요";
        document.getElementById("pwdDiv").style.display = "block";
        isValid = false;
    }

    if (pwd !== repwd) {
        document.getElementById("repwdDiv").innerHTML = "비밀번호가 일치하지 않습니다";
        document.getElementById("repwdDiv").style.display = "block";
        isValid = false;
    }

    // 유효성 검사가 실패한 경우 폼 제출 중지
    if (!isValid) {
        return false;
    }

    // 유효성 검사가 성공하면 폼 제출
    return true;
}

// 비밀번호 확인 입력 필드에 실시간으로 비밀번호 일치 여부를 확인하는 기능 추가
document.getElementById("repwd").addEventListener("input", function() {
    let pwd = document.getElementById("pwd").value.trim();
    let repwd = document.getElementById("repwd").value.trim();
    let repwdDiv = document.getElementById("repwdDiv");

    if (pwd !== repwd) {
        repwdDiv.innerHTML = "비밀번호가 일치하지 않습니다";
        repwdDiv.style.display = "block";
    } else {
        repwdDiv.innerHTML = "";  // 일치하는 경우 오류 메시지를 숨긴다
        repwdDiv.style.display = "none";
    }
});

// 입력 필드에 포커스가 갈 때 오류 메시지 숨기기
document.getElementById("name").addEventListener("focus", function() {
    document.getElementById("nameDiv").style.display = "none";
});

document.getElementById("id").addEventListener("focus", function() {
    document.getElementById("idDiv").style.display = "none";
});

document.getElementById("pwd").addEventListener("focus", function() {
    document.getElementById("pwdDiv").style.display = "none";
});

document.getElementById("repwd").addEventListener("focus", function() {
    document.getElementById("repwdDiv").style.display = "none";
});

// email 선택
function setEmailDomain(value) {
    const domainInput = document.getElementById("email-domain");
    if (value === "직접입력") {
        domainInput.value = "";
        domainInput.focus();
    } else {
        domainInput.value = value;
    }
}
	
// 우편번호 api
function checkPost() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분

            // 각 주소의 노출 규칙에 따라 주소를 조합한다
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기한다
            var addr = ''; // 주소 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다
            document.getElementById('zipcode').value = data.zonecode;
            document.getElementById("addr1").value = addr;
            // 커서를 상세주소 필드로 이동한다
            document.getElementById("addr2").focus();
        }
    }).open();
}